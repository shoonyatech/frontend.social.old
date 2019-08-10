import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
const Request = require("./services/Request");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    getAllJobs: [], // get all jobs array
    getAllconfs: [], // get all confs array
    noResultshow: false,
    noResultshowconf: false,

    // filterScope variable declarations
    searchtext: "",
    selectedSkils: [],
    fulltimestatus: "", parttimestatus: "", remotestatus: "", Contractstatus: "",
    selectedlevels: "",

    // get jobs variable for scroll
    pageNoI: 1,
    itemsPerPage: 20,

    // GET CITY VARIABLES FOR SCROLL AND FILTER
    pageNoF: 1,
    searchtextForCity: "",
    selectedSkilsForCity: [],
    searchCitytext: "",

    // CITY SEARCH VARIABLES
    allCities: [],
    cityConf: "",
    conferenceLength: [],
    meetupsLength: [],
    getAllDevelopers: [],
    angularDevLength: [],
    reactDevLength: [],

    // CONFERENCE PAGE VARIABLES
    todayDate: "",
    dateToCheck: "",
    pastConferences: [],
    upcomingConferences: [],

    developersCount: [],
    designersCount: [],

    // profile page
    user: {},
    getuserDetails: {},
    isSignedIn: false,
  },
  mutations: {

    // MUTATIONS TO UPDATE VALUES FROM CITY PAGE
    updateSearch(state, message) {
      state.searchtext = message;
      state.pageNoI = 1;
    },
    updateFulltime(state, message) {
      state.fulltimestatus = message;
      state.pageNoI = 1;
    },
    updateParttime(state, message) {
      state.parttimestatus = message;
      state.pageNoI = 1;
    },
    updateSkills(state, message) {
      state.selectedSkils = message;
      state.pageNoI = 1;
    },
    updateRemote(state, message) {
      state.remotestatus = message;
      state.pageNoI = 1;
    },
    updateContract(state, message) {
      state.Contractstatus = message;
      state.pageNoI = 1;
    },
    updatelevels(state, message) {
      state.selectedlevels = message;
      state.pageNoI = 1;
    },
    // END

    // MUTATIONS TO UPDATE VALUES FROM CITY PAGE
    updateCitySearch(state, message) {
      state.searchtextForCity = message;
      state.pageNoF = 1;
    },
    updateCitySkills(state, message) {
      state.selectedSkilsForCity = message;
      state.pageNoF = 1;
    },
    updateSearchCity(state, message) {
      state.searchCitytext = message;
      state.pageNoF = 1;
    },
    citySearch(state, message) {
      state.cityConf = message;
    },
    // END
    MODIFYFILTERRESULTS(state) { // MUTATE TO GET FILTER RESULTS FROM JOB PAGE
      Request.default.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + "&isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
              if ( response.data.length === 0 ) {
                state.getAllJobs = [];
                state.noResultshow = true;
              } else {
                state.noResultshow = false;
                state.getAllJobs = response.data;
              }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },
// END
    MODIFYSCROLLRESULTS(state) { // MUTATE TO GET SCROLL RESULTS FROM JOB PAGE
      Request.default.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + "&isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
          let data: any = [];
          data = state.getAllJobs;
          const responseCard: any = response.data;
          for ( let i = 0; i < responseCard.length; i++ ) {
            data.push( response.data[i]);
          }
          state.getAllJobs = data;
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },
// END
    MODIFYCITYFILTERRESULTS(state) { // MUTATE TO GET FILTER RESULTS FROM CITY PAGE
      Request.default.getData("conference?city=" + state.searchCitytext + "&searchText=" + state.searchtextForCity
       + "&relatedSkills=" + state.selectedSkilsForCity.toString() + "&pageNo=" + state.pageNoF
       + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            for (let i = 0; i < state.itemsPerPage; i++) {
              if ( response.data.length === 0 ) {
                state.getAllconfs = [];
                state.noResultshowconf = true;
              } else {
                state.noResultshowconf = false;
                state.getAllconfs = response.data;
              }
            }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },
// END
    MODIFYCITYSCROLLRESULTS(state) { // MUTATE TO GET SCROLL RESULTS FROM CITY PAGE
      Request.default.getData("conference?city=" + state.searchCitytext + "&searchText=" + state.searchtextForCity
       + "&skills=" + state.selectedSkilsForCity.toString() + "&pageNo=" + state.pageNoF
       + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any ) => {
        if ( response.status === 200 ) {
          const responseCard: any = response.data;
          let data: any = [];
          data = state.getAllconfs;
          for ( let i = 0; i < responseCard.length; i++ ) {
            data.push( response.data[i] );
          }
          state.getAllconfs = data;
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },
// END
    GETALLCONFS(state) { // GET ALL CONFERENCE AND MEETUPS
      let apiPath = "/conference";
      if (state.cityConf !== "") {
        apiPath = "/conference?city=" + state.cityConf;
      }
      Request.default.getData(apiPath).then((response: any) => {
        if ( response.status === 200 ) {
          state.getAllconfs = response.data;
          state.conferenceLength = state.getAllconfs.filter((v, i) => {
             const abc: any = state.getAllconfs;
             return abc[i].conferenceOrMeetup === "c";
            });
          state.meetupsLength = state.getAllconfs.filter((v, i) => {
            const abc: any = state.getAllconfs;
            return abc[i].conferenceOrMeetup === "m";
           });
          const date = new Date(Date());
          const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
          const day  = ("0" + date.getDate()).slice(-2);
          state.todayDate =  [ date.getFullYear(), mnth, day ].join("-");
          state.pastConferences = [];
          state.upcomingConferences = [];
          for ( let i = 0; i < response.data.length; i++ ) {
            const abc: any = state.getAllconfs;
            const date1 = new Date(abc[i].dateFrom);
            const mnth1 = ("0" + (date1.getMonth() + 1)).slice(-2);
            const day1  = ("0" + date1.getDate()).slice(-2);
            state.dateToCheck =  [ date1.getFullYear(), mnth1, day1 ].join("-");
            if (state.dateToCheck < state.todayDate) {
              state.pastConferences.push(state.getAllconfs[i]);
            } else {
              state.upcomingConferences.push(state.getAllconfs[i]);
            }
          }
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    GETDEVELOPER(state) { // GET ALL DEVELOPERS AND DESIGNERS
      let apiPath = "/user";
      if (state.cityConf !== "") {
        apiPath = "/user?city=" + state.cityConf;
      }
      Request.default.getData(apiPath).then((response: any) => {
        if ( response.status === 200 ) {
          state.getAllDevelopers = response.data;
          state.angularDevLength = state.getAllDevelopers.filter((person: any) => person.skills.includes( "Angular"));
          state.reactDevLength = state.getAllDevelopers.filter((person: any) => person.skills.includes( "React"));
          state.developersCount = state.getAllDevelopers.filter((person: any) =>
            person.role.includes( "dev"));
          state.designersCount = state.getAllDevelopers.filter((person: any) =>
            person.role.includes( "designer"));
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    GETJOBS(state) { // GET ALL JOBS
      Request.default.getData("job?pageNo=" + state.pageNoI + "&itemsPerPage="
       + state.itemsPerPage).then((response: any) => {
            if ( response.status === 200 ) {
              if ( response.data.length === 0 ) {
                state.getAllJobs = [];
                state.noResultshow = true;
              } else {
                state.noResultshow = false;
                state.getAllJobs = response.data;
              }
            }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    GETCONFERENCE(state) { // GET ALL CONFERENCES
      Request.default.getData("/conference?pageNo=" + state.pageNoF
      + "&itemsPerPage=" + state.itemsPerPage).then((response: any) => {
        if ( response.status === 200 ) {
          for (let i = 0; i < state.itemsPerPage; i++) {
            if ( response.data.length === 0 ) {
              state.getAllconfs = [];
              state.noResultshowconf = true;
            } else {
              state.noResultshowconf = false;
              state.getAllconfs = response.data;
            }
          }
      }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    FBRESPONSE(state, accessToken) { // GET FACEBOOK RESPONSE
      if (accessToken) {
        axios.post(`http://localhost:3333/fb-signin`, {
          accessToken: accessToken.split("=")[1],
        }).then((response) => {
        localStorage.setItem("authToken", response.data.authToken);
        state.user = response.data;
        state.isSignedIn = true;
        });
      }
    },
// END
    GETUSERDETAILS(state, accessToken) { // GET USER DETAILS
      const auth = {
        headers: {Authorization: "Bearer " + accessToken },
      };
      Request.default.getUserData("/me", auth).then((response: any) => {
        if ( response.status === 200 ) {
          state.getuserDetails = response.data;
      }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    UPDATEUSERDETAILS(state, accessToken) { // UPDATE USER DETAILS
      const auth = {
        headers: {Authorization: "Bearer " + accessToken },
      };
      const data = state.getuserDetails;
      Request.default.updateUserData("/me", data, auth).then((response: any) => {
        if ( response.status === 200 ) {
          // console.log("update user profile");
      }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    UPDATEUSERPROFILE(state, payload) { // UPDATE USER PROFILE
      const auth = {
        headers: {"Authorization": "Bearer " + payload.accessToken, "Content-Type": "multipart/form-data" },
      };
      Request.default.updateUserImage("/userimage", payload.formdata, auth).then((response: any) => {
        if ( response.status === 200 ) {
          // console.log("update user image");
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
    GETCITIES(state) { // GET ALL CITIES
      Request.default.getData("city?pageNo=" + state.pageNoI + "&itemsPerPage="
       + state.itemsPerPage).then((response: any) => {
            if ( response.status === 200 ) {
              if ( response.data.length === 0 ) {
                state.allCities = [];
                state.noResultshow = true;
              } else {
                state.noResultshow = false;
                state.allCities = response.data;
              }
            }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
  },
  actions: {
    GETFILTERRESULTS({commit}) { // ACTION TO GET FILTERED RESULTS FROM JOB PAGE
       commit("MODIFYFILTERRESULTS");
    },
    GETSCROLLRESULTS({commit}) { // ACTION TO GET SCROLL RESULTS FROM JOB PAGE
      commit("MODIFYSCROLLRESULTS");
    },

    GETCITYFILTERRESULTS({commit}) { // ACTION TO GET FILTERED RESULTS FROM CITY PAGE
      commit("MODIFYCITYFILTERRESULTS");
   },
    GETCITYSCROLLRESULTS({commit}) { // ACTION TO GET SCROLL RESULTS FROM CITY PAGE
      commit("MODIFYCITYSCROLLRESULTS");
    },
    GETCONFORMEET({commit}) { // ACTION TO CONFERENCES AND MEETUPS
      commit("GETALLCONFS");
    },
    GETDEVELOPER({commit}) { // ACTIONS TO GET DEVELOPERS
      commit("GETDEVELOPER");
    },
    GETJOB({commit}) { // ACTION TO GET ALL JOBS
      commit("GETJOBS");
    },
    GETCONFERENCE({commit}) { // ACTION TO GET ALL CONFERENCES
      commit("GETCONFERENCE");
    },
    FBRESPONSE({commit}, accessToken) { // ACTION TO GET USER DATA AFTER FACEBOOK LOGIN
      commit("FBRESPONSE", accessToken);
    },
    GETUSERDETAILS({commit}, accessToken) { // ACTION TO GET USER DATA
      commit("GETUSERDETAILS", accessToken);
    },
    UPDATEUSERDETAILS({commit}, accessToken) { // ACTION TO UPDATE USER DATA
      commit("UPDATEUSERDETAILS", accessToken);
    },
    UPDATEUSERPROFILE({commit}, payload) { // ACTION TO UPDATE USER IMAGE
      commit("UPDATEUSERPROFILE", payload);
    },
    GETCITIES({commit}) { // ACTION TO GET ALL CITIES
      commit("GETCITIES");
    },
  },
});
