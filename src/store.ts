const Request = require("./services/Request");
import Vue from "vue";
import Vuex from "vuex";
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
             return state.getAllconfs[i]["conferenceOrMeetup"] === "c";
            });
          state.meetupsLength = state.getAllconfs.filter((v, i) => {
            return state.getAllconfs[i]["conferenceOrMeetup"] === "m";
           });
          const date = new Date(Date());
          const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
          const day  = ("0" + date.getDate()).slice(-2);
          state.todayDate =  [ date.getFullYear(), mnth, day ].join("-");
          state.pastConferences = [];
          state.upcomingConferences = [];
          for ( let i = 0; i < response.data.length; i++ ) {
            const date1 = new Date(state.getAllconfs[i]["dateFrom"]);
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
      Request.default.getData("job").then((response: any) => {
        if ( response.status === 200 ) {
            let checkStage: any;
            let data: any = [];
            data = state.getAllJobs;
            if (response.data.length < state.itemsPerPage){
               checkStage = response.data.length;
            } else {
                checkStage = state.itemsPerPage;
            }
            for ( let i = 0; i < checkStage; i++ ) {
              if (response.data.length === 0) {
                state.getAllJobs = [];
                state.noResultshow = true;
              } else {
                state.noResultshow = false;
                data.push( response.data[i] );
              }
            }
            state.getAllJobs = data;
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
// END
    GETCONFERENCE(state) { // GET ALL CONFERENCES
      Request.default.getData("/conference").then((response: any) => {
        if ( response.status === 200 ) {
          let checkStage: any;
          let data: any = [];
          data = state.getAllconfs;
          if (response.data.length < state.itemsPerPage) {
            checkStage = response.data.length;
          } else {
              checkStage = state.itemsPerPage;
          }
          for ( let i = 0; i < checkStage; i++ ) {
              if (response.data.length === 0) {
                  if (state.noResultshowconf === false) {
                      state.getAllconfs = [];
                      state.noResultshowconf = true;
                  }
              } else {
                  state.noResultshowconf = false;
                  data.push(response.data[i]);
              }
          }
          state.getAllconfs = data;
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
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
    ADDJOBS({commit}, payload) { // ACTION TO ADD ALL JOBS
      Request.default.postData("job", payload).then((response: any) => {
        if ( response.status === 200 ) {
          alert("job added successfully!");
        }
        }).catch((error: any) => {
          if ( error.response.status === 500 ) {
            alert("Error adding new job, Please fill all fields and try again.");
          }
      });
    },
    ADDCONFERENCE({commit}, payload) { // ACTION TO ADD ALL CONFERECNES
      Request.default.postData("conference", payload).then((response: any) => {
        if ( response.status === 200 ) {
          alert("conference added successfully!");
        }
    }).catch((error: any) => {
      if ( error.response.status === 500 ) {
        alert("Error adding new conference, Please fill all fields and try again.");
      }
    });
    },
  },
});
