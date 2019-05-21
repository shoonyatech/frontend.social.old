<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic"></div>
      <div class="social-links">
        <LabelValue label="Github" value="https://github.com/souvikbasu"/>
        <LabelValue label="Twitter" value="https://github.com/souvikbasu"/>
        <LabelValue label="LinkedIn" value="https://github.com/souvikbasu"/>
        <LabelValue label="Bitbucket" value="https://github.com/souvikbasu"/>
        <LabelValue label="Website" value="https://github.com/souvikbasu"/>
      </div>
    </div>
    <div>{{ info }}</div>
    <div class="skills-section"></div>
    <div class="conf-section">
      <!-- <LabelValue label="Conferencesattended" :value="confAttended"></LabelValue>
      <LabelValue label="Upcoming Conferences" :value="confUpcoming"></LabelValue>
      <LabelValue label="Meetups Attended" :value="meetupAttended"></LabelValue>
      <LabelValue label="Upcoming meetups" :value="meetupUpcoming"></LabelValue>-->
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
  public info: string;
  public confAttended: string;
  public confUpcoming: string;
  public meetupAttended: string;
  public meetupUpcoming: string;
  public apiUrl: string;

  constructor() {
    super();
    this.info = "";
    this.confAttended = "";
    this.confUpcoming = "";
    this.meetupAttended = "";
    this.meetupUpcoming = "";
    this.apiUrl = process.env.API_URL || "http://localhost:3300";
  }
  private mounted() {
    const accessToken = this.$route.hash
      .split("&")
      .find((p) => p.indexOf("access_token") > -1);
    if (accessToken) {
      axios
        .post<string>(`${this.apiUrl}/fb-signin`, {
          accessToken: accessToken.split("=")[1],
        })
        .then((response) => alert(response.data));
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
