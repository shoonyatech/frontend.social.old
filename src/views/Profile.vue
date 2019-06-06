<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic">
        <img v-bind:src="user.profilePic">
      </div>
      <div>{{ user.name }}</div>
      <div class="social-links mt-5">
        <LabelValue label="Github" value/>
        <LabelValue label="Twitter" value/>
        <LabelValue label="LinkedIn" value/>
        <LabelValue label="Bitbucket" value/>
        <LabelValue label="Website" value/>
      </div>
    </div>
    <div>{{ user.info }}</div>
    <div class="skills-section"></div>
    <div class="conf-section">
      <LabelValue label="Conferences Attended" :value="user.confAttended"></LabelValue>
      <LabelValue label="Upcoming Conferences" :value="user.confUpcoming"></LabelValue>
      <LabelValue label="Meetups Attended" :value="user.meetupAttended"></LabelValue>
      <LabelValue label="Upcoming meetups" :value="user.meetupUpcoming"></LabelValue>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LabelValue from "./LabelValue.vue";
export default {
  computed: mapState([ // getting data from store
      "user",
    ]),
  components: {
    LabelValue,
  },
  created() {
    this.facebookResponse();
  },
  methods: {
    facebookResponse() {
      const accessToken = this.$route.hash
      .split("&")
      .find((p) => p.indexOf("access_token") > -1);
      this.$store.dispatch("FBRESPONSE", accessToken);
    },
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
</style>
