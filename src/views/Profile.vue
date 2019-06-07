<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic">
        <img v-bind:src="user.profilePic">
        <div class="username">{{ user.name }}</div>
      </div>
      
      <div class="social-links mt-5">
        <div class="" v-for="abc in getuserDetails.social" :key="'abc-id' + abc">
        <LabelValue :label=abc class="fontlabel" />
        </div>
      </div>
    </div>
    <div>{{ user.info }}</div>
    <div class="skills-section">
      <div class="row" v-for="abc in getuserDetails.skills" :key="'abc-id' + abc">
        <div class="col-md-2">
          <span>{{abc}}</span>
        </div>
      </div>
    </div>
    <div class="conf-section mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Conferences Attended</span>
            </div>
            <div class="col-md-7">
              <span class="fontmatch" v-for="abc in getuserDetails.confAttended" :key="'abc-id' + abc"> {{abc}},</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Upcoming Conferences</span>
            </div>
            <div class="col-md-7">
              <span class="fontmatch" v-for="abc in getuserDetails.confUpcoming" :key="'abc-id' + abc"> {{abc}},</span>
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
              <span class="fontmatch" v-for="abc in getuserDetails.meetupAttended" :key="'abc-id' + abc"> {{abc}},</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Upcoming meetups</span>
            </div>
            <div class="col-md-7">
              <span class="fontmatch" v-for="abc in getuserDetails.meetupUpcoming" :key="'abc-id' + abc"> {{abc}},</span>
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
      "user", "getuserDetails",
    ]),
  components: {
    LabelValue,
  },
  created() {
    this.facebookResponse();
    var vim =this
    setTimeout(function(){
      vim.getuserdetails();
    },2000)
  },
  methods: {
    facebookResponse() {
      const accessToken = this.$route.hash
      .split("&")
      .find((p) => p.indexOf("access_token") > -1);
      this.$store.dispatch("FBRESPONSE", accessToken);
    },
    getuserdetails() {
      this.$store.dispatch("GETUSERDETAILS", this.$store.state.user.authToken);
    }
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
}
</style>
