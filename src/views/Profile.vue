<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic">
        <img v-bind:src="user.profilePic">
      </div>
      <div>{{ user.name }}</div>
      <div class="social-links">
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

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import LabelValue from "./LabelValue.vue";
@Component({
  components: {
    LabelValue,
  },
})
export default class Profile extends Vue {
  public user: any;
  public apiUrl: string;

  constructor() {
    super();
    this.user = {};
    this.apiUrl =
      process.env.API_URL || "https://frontend-social-api.herokuapp.com";
  }
  private mounted() {
    const accessToken = this.$route.hash
      .split("&")
      .find(p => p.indexOf("access_token") > -1);
    if (accessToken) {
      axios
        .post<any>(`${this.apiUrl}/fb-signin`, {
          accessToken: accessToken.split("=")[1],
        })
        .then(response => {
          console.log(response.data);
          this.user = response.data;
        });
    }
  }
}
</script>

<style scoped lang="scss">
.top-section {
  display: flex;
  width: 80rem;
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
  margin: 4rem;
  text-align: left;
}

.conf-section {
}
</style>
