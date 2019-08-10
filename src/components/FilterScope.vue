<template>
  <!-- filter scope div -->
  <div class="filterScopeDiv">
    <div class="row searchDiv">
      <input
        class="searchdiv"
        placeholder="Search..."
        :value="searchtext"
        @input="updateSearch"
      />
    </div>
    <div class="row skills mt-5">
      <div class="">
        <b-form-group>
          <b-form-checkbox-group
            class="skillscheckbox textcolorgreen"
            v-model="selectedSkils"
            name="flavour-2a"
            stacked
            v-on:change="updateSkills"
          >
            <b-form-checkbox class="webkitbox" value="React"
              >React</b-form-checkbox
            >
            <b-form-checkbox class="webkitbox" value="Angular"
              >Angular</b-form-checkbox
            >
            <b-form-checkbox class="webkitbox" value="Vue">Vue</b-form-checkbox>
            <b-form-checkbox class="webcomponent" value="Web Components"
              >Web Components</b-form-checkbox
            >
          </b-form-checkbox-group>
        </b-form-group>
      </div>
    </div>

    <div class="row mt-5 ml-0 timeStatus">
      <b-form-checkbox
        class="col-md-6 col-6 times textcolorgreen webkitboxStatus"
        v-model="fulltimestatus"
        name="fulltimestatus"
        v-on:change="updateFulltime"
      >
        <span>Full time</span>
      </b-form-checkbox>

      <b-form-checkbox
        class="col-md-6 col-6 times textcolorgreen webkitboxStatus"
        v-model="parttimestatus"
        name="parttimestatus"
        v-on:change="updateParttime"
      >
        <span>Part time</span>
      </b-form-checkbox>
    </div>

    <div class="row mt-5 ml-0 locationStatus">
      <b-form-checkbox
        class="col-md-6 col-6 textcolorgreen webkitboxStatus"
        v-model="remotestatus"
        name="remotestatus"
        v-on:change="updateRemote"
      >
        <span>Remote</span>
      </b-form-checkbox>

      <b-form-checkbox
        class="col-md-6 col-6 textcolorgreen webkitboxStatus"
        v-model="Contractstatus"
        name="Contractstatus"
        v-on:change="updateContract"
      >
        <span>Contract</span>
      </b-form-checkbox>
    </div>

    <div class="row level mt-5">
      <div class="leveldowndiv">
        <b-form-radio
          class="col-4 textcolorgreen"
          v-model="selectedlevels"
          name="some-radios"
          v-on:change="updatelevels"
          value="0"
          >Junior</b-form-radio
        >
        <b-form-radio
          class="col-4 textcolorgreen"
          v-model="selectedlevels"
          name="some-radios"
          v-on:change="updatelevels"
          value="1"
          >Intermediate</b-form-radio
        >
        <b-form-radio
          class="col-4 textcolorgreen"
          v-model="selectedlevels"
          name="some-radios"
          v-on:change="updatelevels"
          value="2"
          >Senior</b-form-radio
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: mapState([
    // getting data from store
    'searchtext',
    'fulltimestatus',
    'parttimestatus',
    'selectedSkils',
    'remotestatus',
    'Contractstatus',
    'selectedlevels',
  ]),

  methods: {
    updateSearch(e) {
      // UPDATE SEARCH
      this.$store.commit('updateSearch', e.target.value);
      this.getFilterResults();
    },
    updateSkills(e) {
      // UPDATE SKILLS
      this.$store.commit('updateSkills', e);
      this.getFilterResults();
    },
    updateFulltime(e) {
      // UPDATE FULLTIME
      this.$store.commit('updateFulltime', e);
      this.getFilterResults();
    },
    updateParttime(e) {
      // UPDATE PARTTIME
      this.$store.commit('updateParttime', e);
      this.getFilterResults();
    },
    updateRemote(e) {
      // UPDATE REMOTE
      this.$store.commit('updateRemote', e);
      this.getFilterResults();
    },
    updateContract(e) {
      // UPDATE CONTRACT
      this.$store.commit('updateContract', e);
      this.getFilterResults();
    },
    updatelevels(e) {
      // UPDATE LEVELS
      this.$store.commit('updatelevels', e);
      this.getFilterResults();
    },
    getFilterResults() {
      // UPDATE FILTERED RESULTS
      this.$store.dispatch('GETFILTERRESULTS');
    },
  },
};
</script>

<style scoped>
/* filter style */

.searchdiv {
  border: 2px solid #aada20;
  width: 100%;
}
.searchDiv {
  margin: 0%;
}

.filterScopeDiv {
  position: sticky;
  top: 27%;
}
.textcolorgreen {
  color: #aada20;
}

.locationStatus {
  margin-left: -9%;
}

.webkitbox,
.webkitboxStatus {
  display: -webkit-box;
}

.webcomponent {
  display: inline;
}

/* media query  for filters*/
@media (max-width: 767px) {
  .locationStatus,
  .timeStatus {
    margin-left: 0px;
  }
}

@media (min-width: 767px) and (max-width: 1322px) {
  .webkitboxStatus {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 1322px) and (max-width: 1417px) {
  .times {
    flex: 0 0 75%;
    max-width: 75%;
  }
}
</style>
