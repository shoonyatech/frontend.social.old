<template>
  <!-- get Conference div -->
  <div class="getJobHeader">
    <div class="getJob mt-4">
      Conference relevant to your skills
    </div>
    <!-- <div class="container row">
    <div class="one col-8">
        <span>I'm first</span>
    </div>
    <div class="two col-4">
        <span>I'm second</span>
    </div>
</div> -->
    <div class="cont row mt-4" style="margin: 0; position: relative;">
      <!-- listing of all Conference -->
      <div class="col-md-10" id="menu">
        <conf-list
          v-for="conflist in getAllconfs"
          :key="'job-id-' + conflist._id"
          :conflist="conflist"
        />
        <span class="noResult" v-if="noResultshowconf"
          >No result found!! Please try with different filter.</span
        >
      </div>
      <!-- filter component for gt Conference -->
      <div class="col-md-2">
        <filter-confscope></filter-confscope>
      </div>
    </div>
  </div>
</template>

<script>
import ConfList from '@/components/ConfList';
import FilterConfscope from '@/components/FilterConfscope';
import { mapActions, mapState } from 'vuex';
export default {
  computed: mapState([
    // getting data from store
    'noResultshow',
    'searchtextForCity',
    'selectedSkilsForCity',
    'searchCitytext',
    'getAllconfs',
    'noResultshowconf',
  ]),
  components: {
    ConfList,
    FilterConfscope,
  },
  created() {
    // hit to get all data at once
    this.processForm();
  },
  mounted() {
    this.ScrollChecked(); // on scroll call function
  },
  methods: {
    ScrollChecked() {
      // SCROLL CHECK IF BOTTOM TOUCHED
      const vim = this;
      window.onscroll = x => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          vim.$store.state.pageNoF++;
          this.getScrollResult();
        }
      };
    },
    processForm() {
      // get Conference api
      this.$store.dispatch('GETCONFERENCE');
    },
    getScrollResult() {
      // get more data on scroll
      this.$store.dispatch('GETCITYSCROLLRESULTS');
    },
  },
};
</script>

<style scoped>
/* get Conference css */
.getJob {
  text-align: -webkit-auto;
  color: #000000;
  font-size: 23px;
}

.getJobHeader {
  margin-left: 5%;
}
#menu {
  border-right: 3px solid #aada20;
  top: 0;
  bottom: 0;
}
.noResult {
  text-align: justify;
  color: #aada20;
}
@media screen and (max-width: 767px) {
  .cont {
    display: flex;
    flex-flow: column-reverse;
  }
  #menu {
    margin-top: 7%;
    border-right: 0;
  }
}
</style>
