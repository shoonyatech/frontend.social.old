<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic">
        <img v-bind:src="getuserDetails.profilePic">
        <div class="username">{{ getuserDetails.name }}</div>
      </div>
      
      <div class="social-links mt-5">
        <div class="" v-for="socials in getuserDetails.social" :key="'socials-id' + socials">
        <LabelValue :label=socials class="fontlabel" />
        </div>
      </div>
    </div>
    <!-- <div>{{ user.info }}</div> -->
    <div class="skills-section">
      <div class="row" v-for="skill in getuserDetails.skills" :key="'abc-id' + skill">
        <div class="col-md-2">
          <span>{{skill}}</span>
        </div>
      </div>
    </div>
    <div class="conf-section mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-6">
              <span>Conferences Attended</span>
            </div>
            <div class="col-md-6">
              <span class="fontmatch" v-for="confAtnd in getuserDetails.confAttended" :key="'abc-id' + confAtnd"> {{confAtnd}},</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-6">
              <span>Upcoming Conferences</span>
            </div>
            <div class="col-md-6">
              <span class="fontmatch" v-for="confUpcmng in getuserDetails.confUpcoming" :key="'abc-id' + confUpcmng"> {{confUpcmng}},</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Meetups Attended</span>
            </div>
            <div class="col-md-7">
              <span class="fontmatch" v-for="meetupAtnd in getuserDetails.meetupAttended" :key="'abc-id' + meetupAtnd"> {{meetupAtnd}},</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Upcoming meetups</span>
            </div>
            <div class="col-md-7">
              <span class="fontmatch" v-for="meetupUpcmng in getuserDetails.meetupUpcoming" :key="'abc-id' + meetupUpcmng"> {{meetupUpcmng}},</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LabelValue from "./LabelValue.vue";
export default {
  computed: mapState([ // getting data from store
      "getuserDetails",
    ]),
  components: {
    LabelValue,
  },
};
</script>

<style scoped>
.top-section {
  display: flex;
  margin: 0 auto;
}

.profile-pic {
  font-size: 28px;
  margin: 4rem;
  border: solid 2px #aada18;
  height: 15rem;
  width: 13rem;
}

.social-links {
  text-align: left;
}

img{
  width: 100%;
  height: 100%;
}

.fontlabel{
  color: #aada18 !important
}

.fontmatch{
  font-size: 20px;
  float: left;
}
</style>
