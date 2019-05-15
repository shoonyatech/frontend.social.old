import Request from "./services/Api.js";
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
    pageNoI: 0,
    itemsPerPage: 20,
  },
  mutations: {
    updateSearch(state, message) {
      state.searchtext = message;
    },
    updateFulltime(state, message) {
      state.fulltimestatus = message;
    },
    updateParttime(state, message) {
      state.parttimestatus = message;
    },
    updateSkills(state, message) {
      state.selectedSkils = message;
    },
    updateRemote(state, message) {
      state.remotestatus = message;
    },
    updateContract(state, message) {
      state.Contractstatus = message;
    },
    updatelevels(state, message) {
      state.selectedlevels = message;
    },
    MODIFYFILTERRESULTS(state) {
      Request.getData("job?searchText=" + state.searchtext + "&skills=" + state.selectedSkils.toString()
      + "&isFullTime=" + state.fulltimestatus + "&isPartTime=" + state.parttimestatus + "&isRemote="
      + state.remotestatus + " &isContract=" + state.Contractstatus + "&level=" + state.selectedlevels + "&pageNo="
      + state.pageNoI + "&itemsPerPage=" + state.itemsPerPage)
      .then((response: any) => {
        if ( response.status === 200 ) {
            state.getAllJobs = response.data;
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
  },
});
