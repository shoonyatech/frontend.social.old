<template>
  <div v-if="upcomingConferences">
    <div class="upcomingConferences">
      <div class="row">
        <span class="textcolorgreen">Upcoming Conferences</span>
      </div>
      <br />
      <!-- Upcoming Conferences -->
      <div v-if="upcomingConferences.length > 0">
        <upcoming-conference
          v-for="upConf in upcomingConferences"
          :key="'upConf-id-' + upConf._id"
          :upConf="upConf"
        ></upcoming-conference>
      </div>
      <div v-else>
        <span class="textcolorgreen nadiv">N/A</span>
      </div>
    </div>
    <br />
    <br />
    <div class="pastConferences">
      <div class="row">
        <span class="textcolorgreen">Past Conferences</span>
      </div>
      <br />
      <!-- Past Conferences -->
      <div v-if="pastConferences.length > 0">
        <past-conference
          v-for="pastConf in pastConferences"
          :key="'pastConf-id-' + pastConf._id"
          :pastConf="pastConf"
        ></past-conference>
      </div>
      <div v-else>
        <span class="textcolorgreen nadiv">N/A</span>
      </div>
    </div>
  </div>
</template>

<script>
import PastConference from '@/components/PastConference';
import UpcomingConference from '@/components/UpcomingConference';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    PastConference,
    UpcomingConference,
  },
  computed: {
    ...mapState(['pastConferences', 'upcomingConferences']),
  },
};
</script>

<style scoped>
.textcolorgreen {
  color: #aada20;
  font-size: 21px;
}

@media (max-width: 768px) {
  .nadiv {
    float: left !important;
  }
}
</style>
