<template>
  <div class="profile">
    <div class="top-section">
      <div class="profile-pic">
        <img v-bind:src="getuserDetails.profilePic" @click="trigger">
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <input type="text" ref="user_name" :value="getuserDetails.name" :disabled="!isEditingUsername"
           :class="{view: !isEditingUsername}" class="nameInput mt-1">

        <button @click="isEditingUsername = !isEditingUsername" v-if="!isEditingUsername">Edit</button>
        <button @click="saveUsername" v-else-if="isEditingUsername">Save</button>
        <button class="ml-2" v-if="isEditingUsername" @click="isEditingUsername = false">Cancel</button>
      </div>
      
      <div class="social-links">
        <div class="" v-for="socials in getuserDetails.social" :key="'socials-id' + socials">

          <input type="text" :ref="socials" :value="socials" :disabled="!isEditingSocial"
           :class="{view: !isEditingSocial}" class="socialInput mt-2">
        </div>
        <button class="socialbtn" @click="isEditingSocial = !isEditingSocial" v-if="!isEditingSocial">Edit</button>
        <button class="socialbtn ml-2" v-else-if="isEditingSocial" @click="isEditingSocial = false">Cancel</button>
        <button class="socialbtn" @click="saveSocial" v-if="isEditingSocial">Savde</button>
        
        
      </div>
    </div>
    <div class="skills-section">
      <div class="row" v-for="skill in getuserDetails.skills" :key="'abc-id' + skill">
        <div class="col-md-2">
          <input type="text" :ref="skill" :value="skill" :disabled="!isEditingSkill"
           :class="{view: !isEditingSkill}" class="skillInput mt-2">
        </div>
      </div>

      <button @click="isEditingSkill = !isEditingSkill" v-if="!isEditingSkill">Edit</button>
      <button @click="saveSkill" v-else-if="isEditingSkill">Save</button>
      <button class="ml-2" v-if="isEditingSkill" @click="isEditingSkill = false">Cancel</button>
    </div>
    <div class="conf-section mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-6">
              <span>Conferences Attended</span>
            </div>
            <div class="col-md-6">
              <input type="text" :ref="confAtnd" :value="confAtnd+','" :disabled="!isEditingMeets"
                v-for="confAtnd in getuserDetails.confAttended" 
                :key="'abc-id' + confAtnd"
                :class="{view: !isEditingMeets}" class="meetupInput ml-1">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-6">
              <span>Upcoming Conferences</span>
            </div>
            <div class="col-md-6">
              <input type="text" :ref="confUpcmng" :value="confUpcmng+','" :disabled="!isEditingMeets"
                v-for="confUpcmng in getuserDetails.confUpcoming" 
                :key="'abc-id' + confUpcmng"
                :class="{view: !isEditingMeets}" class="meetupInput ml-1">
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
               <input type="text" :ref="meetupAtnd" :value="meetupAtnd+','" :disabled="!isEditingMeets"
                  v-for="meetupAtnd in getuserDetails.meetupAttended" 
                  :key="'abc-id' + meetupAtnd"
                  :class="{view: !isEditingMeets}" class="meetupInput ml-1">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class=row>
            <div class="col-md-5">
              <span>Upcoming meetups</span>
            </div>
            <div class="col-md-7">
               <input type="text" :ref="meetupUpcmng" :value="meetupUpcmng+','" :disabled="!isEditingMeets"
                  v-for="meetupUpcmng in getuserDetails.meetupUpcoming" 
                  :key="'abc-id' + meetupUpcmng"
                  :class="{view: !isEditingMeets}" class="meetupInput ml-1">
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3" style="display: -webkit-inline-box;">
        <button @click="isEditingMeets = !isEditingMeets" v-if="!isEditingMeets">Edit</button>
        <button @click="saveMeets" v-else-if="isEditingMeets">Save</button>
        <button class="ml-2" v-if="isEditingMeets" @click="isEditingMeets = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LabelValue from "./LabelValue.vue";
export default {
  data() {
    return {
      isEditingUsername: false,
      isEditingSocial: false,
      isEditingSkill: false,
      isEditingMeets: false,

      file: "",
    };
  },
  computed: mapState([ // getting data from store
      "getuserDetails",
    ]),
  components: {
    LabelValue,
  },
  methods: {
    saveUsername() {
      this.$store.state.getuserDetails.name = this.$refs["user_name"].value;
      this.isEditingUsername = !this.isEditingUsername;

      this.updateuserdetails();
    },
    saveSocial() {
      let vim = this.$store.state.getuserDetails.social;
      for (let i = 0; i < vim.length; i++) {
        vim[i] = this.$refs[vim[i]][0].value;
      }
      this.isEditingSocial = !this.isEditingSocial;
      this.updateuserdetails();
    },
    saveSkill() {
      let vim = this.$store.state.getuserDetails.skills;
      for (let i = 0; i < vim.length; i++) {
        vim[i] = this.$refs[vim[i]][0].value;
      }
      this.isEditingSkill = !this.isEditingSkill;

      this.updateuserdetails();
    },
    saveMeets() {
      let vimA = this.$store.state.getuserDetails.confAttended;
      let vimB = this.$store.state.getuserDetails.confUpcoming;
      let vimC = this.$store.state.getuserDetails.meetupAttended;
      let vimD = this.$store.state.getuserDetails.meetupUpcoming;
      for (let i = 0; i < vimA.length; i++) {
        vimA[i] = this.$refs[vimA[i]][0].value;
      }
      for (let i = 0; i < vimB.length; i++) {
        vimB[i] = this.$refs[vimB[i]][0].value;
      }
      for (let i = 0; i < vimC.length; i++) {
        vimC[i] = this.$refs[vimC[i]][0].value;
      }
      for (let i = 0; i < vimD.length; i++) {
        vimD[i] = this.$refs[vimD[i]][0].value;
      }
      this.isEditingMeets = !this.isEditingMeets;

      this.updateuserdetails();
    },

    updateuserdetails() {
      if (localStorage.authToken) {
        this.$store.dispatch("UPDATEUSERDETAILS", localStorage.getItem("authToken"));
      }
    },

    trigger() {
      if (this.isEditingUsername === true) {
        this.$refs.file.click();
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      this.$store.dispatch("UPDATEUSERPROFILE", {formdata: formData, accessToken: localStorage.getItem("authToken")});
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
  margin-top: 4rem !important;
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

.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
  text-align: -webkit-auto;
}

.nameInput {
  text-align: center;
}

.socialInput {
  color: #aada18 !important;
}

.skillInput {
  text-align: center;
  color: #2c3e50;
}

button {
    background: #fff;
    border: 1px solid #aada18;
    color: #aada18;
    font-size: initial;
}

.socialbtn {
  float: right;
}

.meetupInput {
  width: 33%;
  font-size: 17px;
  color: #2c3e50;
  /* float: left; */
}

#file {
  display: none;
}

@media (max-width: 768px) {
  .fontmatch{
    float: none;
  }
}
</style>
