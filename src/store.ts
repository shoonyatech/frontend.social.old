import Request from "./services/Request";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    getAllJobs: [], // get all jobs array

    // filterScope variable declarations
    searchtext: "",
    selectedSkils: [],
    fulltimestatus: false, parttimestatus: false, remotestatus: false, Contractstatus: false,
    selectedlevels: 2,

    // get jobs variable for scroll
    pageNoI: 1,
    itemsPerPage: 20,
  },
  mutations: {
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
    MODIFYFILTERRESULTS(state) {
      Request.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + " &isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            state.getAllJobs = response.data;
            for (let i = 0; i < state.itemsPerPage; i++) {
              state.getAllJobs = response.data;
            }
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },

    MODIFYSCROLLRESULTS(state) {
      Request.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + " &isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            state.getAllJobs += response.data;
        }
      }).catch((error: any) => {
        if (error.response.status === 500 ) {
          alert("error");
        }
      });
    },
  },
  actions: {
    GETFILTERRESULTS({commit}) {
       commit("MODIFYFILTERRESULTS");
    },
    GETSCROLLRESULTS({commit}) {
      commit("MODIFYSCROLLRESULTS");
    },
  },
});
