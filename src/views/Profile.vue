<template>
  <div class="profile">
    <div>
      <div class="profile-pic"></div>
      <div class="social-links">
        <LabelValue label="Github" value="https://github.com/souvikbasu"/>
        <LabelValue label="Twitter" value="https://github.com/souvikbasu"/>
        <LabelValue label="LinkedIn" value="https://github.com/souvikbasu"/>
        <LabelValue label="Bitbucket" value="https://github.com/souvikbasu"/>
        <LabelValue label="Website" value="https://github.com/souvikbasu"/>
      </div>
      <div>{{ info }}</div>
      <div class="skills"></div>
      <div>
        <LabelValue label="Conferencesattended" :value="confAttended"></LabelValue>
        <LabelValue label="Upcoming Conferences" :value="confUpcoming"></LabelValue>
        <LabelValue label="Meetups Attended" :value="meetupAttended"></LabelValue>
        <LabelValue label="Upcoming meetups" :value="meetupUpcoming"></LabelValue>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LabelValue from "./LabelValue.vue";
import axios from "axios";

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

  constructor() {
    super();
    this.info = "";
    this.confAttended = "";
    this.confUpcoming = "";
    this.meetupAttended = "";
    this.meetupUpcoming = "";
  }
  private mounted() {
    axios
      .get<string>("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data));
  }
}
</script>

<style scoped lang="scss">
.profile-pic {
  font-size: 28px;
  margin: 4rem;
  border: solid 2px #aada18;
  height: 15rem;
  width: 13rem;
}
</style>
