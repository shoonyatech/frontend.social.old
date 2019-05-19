// import Request from "./services/Request";
// const Request = require('./services/Request');
import Request from "@/services/Request";
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

    cityConf: "",
    conferenceLength: [],
    meetupsLength: [],
    getAllDevelopers: [],
    angularDevLength: [],
    reactDevLength: [],

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
      Request.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + "&isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            // state.getAllJobs = response.data;
            // for (let i = 0; i < state.itemsPerPage; i++) {
              if ( response.data.length === 0 ) {
                state.getAllJobs = [];
                state.noResultshow = true;
              } else {
                state.noResultshow = false;
                state.getAllJobs = response.data;
              }
            // }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },

    MODIFYSCROLLRESULTS(state) { // MUTATE TO GET SCROLL RESULTS FROM JOB PAGE
      Request.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + "&isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
          const responseCard: any = response.data;
          for ( let i = 0; i < responseCard.length; i++ ) {
            state.getAllJobs.push( response.data[i]);
          }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },

    MODIFYCITYFILTERRESULTS(state) { // MUTATE TO GET FILTER RESULTS FROM CITY PAGE
      Request.getData("conference?city=" + state.searchCitytext + "&searchText=" + state.searchtextForCity 
       + "&relatedSkills=" + state.selectedSkilsForCity.toString() + "&pageNo=" + state.pageNoF
       + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            // state.getAllconfs = response.data;
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

    MODIFYCITYSCROLLRESULTS(state) { // MUTATE TO GET SCROLL RESULTS FROM CITY PAGE
      Request.getData("conference?city=" + state.searchCitytext + "&searchText=" + state.searchtextForCity 
       + "&skills=" + state.selectedSkilsForCity.toString() + "&pageNo=" + state.pageNoF
       + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
          const responseCard: any = response.data;
          for ( let i = 0; i < responseCard.length; i++ ) {
            state.getAllconfs.push( response.data[i] );
          }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },

    GETALLCONFS(state) {
      let apiPath = "/conference";
      if (state.cityConf !== "") {
        apiPath = "/conference?city=" + state.cityConf;
      }
      Request.getData(apiPath).then((response: any) => {
        if ( response.status === 200 ) {
          state.getAllconfs = response.data;
          state.conferenceLength = state.getAllconfs.filter((v, i) => {
             return state.getAllconfs[i].conferenceOrMeetup === "c";
            });
          state.meetupsLength = state.getAllconfs.filter((v, i) => {
            return state.getAllconfs[i].conferenceOrMeetup === "m";
           });
          const date = new Date(Date());
          const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
          const day  = ("0" + date.getDate()).slice(-2);
          state.todayDate =  [ date.getFullYear(), mnth, day ].join("-");
          state.pastConferences = [];
          state.upcomingConferences = [];
          for ( let i = 0; i < response.data.length; i++ ) {
            const date1 = new Date(state.getAllconfs[i].dateFrom);
            const mnth1 = ("0" + (date1.getMonth() + 1)).slice(-2);
            const day1  = ("0" + date1.getDate()).slice(-2);
            state.dateToCheck =  [ date1.getFullYear(), mnth1, day1 ].join("-");
            if (state.dateToCheck < state.todayDate) {
              state.pastConferences.push(state.getAllconfs[i]);
            } else {
              state.upcomingConferences.push(state.getAllconfs[i]);
              console.log('s', state.upcomingConferences)
            }
          }
        }
      }).catch((error: any) => {
        if ( error.response.status === 500 ) {
            alert("error");
        }
      });
    },
    GETDEVELOPER(state) {
      let apiPath = "/user";
      if (state.cityConf !== "") {
        apiPath = "/user?city=" + state.cityConf;
      }
      Request.getData(apiPath).then((response: any) => {
        if ( response.status === 200 ) {
          state.getAllDevelopers = response.data;
          state.angularDevLength = state.getAllDevelopers.filter((person) => person.skills.includes( "Angular"));
          state.reactDevLength = state.getAllDevelopers.filter((person) => person.skills.includes( "React"));
          state.developersCount = state.getAllDevelopers.filter((person) =>
            person.role.includes( "Software Developer"));
          state.designersCount = state.getAllDevelopers.filter((person) =>
            person.role.includes( "Software Designers"));
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
    GETCONFORMEET({commit}) {
      commit("GETALLCONFS");
    },
    GETDEVELOPER({commit}) {
      commit("GETDEVELOPER");
    },
  },
});
