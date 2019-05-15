<template>
<!-- filter scope div -->
    <div class="filterScopeDiv">
        <div class="row searchDiv">
            <input class="searchdiv" placeholder= "Search..." :value="searchtext" @input="updateSearch">
        </div>
        <div class="row skills mt-5">
            <div class="col-12 col-md-12 col-sm-1">
                 <b-form-group>
                    <b-form-checkbox-group class="skillscheckbox textcolorgreen" v-model="selectedSkils" name="flavour-2a" stacked v-on:change="updateSkills">
                        <b-form-checkbox class="col-md-2 webkitbox" value="React">React</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Angular">Angular</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Vue">Vue</b-form-checkbox>
                        <b-form-checkbox class="webkitbox" value="Web Components">Web Components</b-form-checkbox>
                    </b-form-checkbox-group>
                 </b-form-group>
            </div>
        </div>

        <div class="row mt-5 ml-0 timeStatus">
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model ="fulltimestatus" name="fulltimestatus" v-on:change="updateFulltime">
              <span>Full time</span>
            </b-form-checkbox>
            
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" :value ="parttimestatus" name="parttimestatus" @input="updateParttime">
              <span>Part time</span>
            </b-form-checkbox>
        </div>
        
        <div class="row mt-5 ml-0 locationStatus">
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="remotestatus" name="remotestatus" v-on:change="updateRemote">
              <span>Remote</span>
            </b-form-checkbox>

            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="Contractstatus" name="Contractstatus" v-on:change="updateContract">
              <span>Contract</span>
            </b-form-checkbox>
        </div>

        <div class="row level mt-5">
            <div class="col-1 col-sm-1 leveldowndiv">
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 1 v-on:change="updatelevels">Junior</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 2 v-on:change="updatelevels">Intermediate</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 3 v-on:change="updatelevels">Senior</b-form-radio>
            </div>
        </div>
    </div>
</template>

<script>
import Request from "@/services/Request"
import { mapState, mapActions } from "vuex"
export default {
     computed: mapState([ //getting data from store
      'searchtext', 'fulltimestatus', 'parttimestatus', 'selectedSkils',
      'remotestatus', 'Contractstatus', 'selectedlevels'
    ]),

    methods: {
        updateSearch (e) { // UPDATE SEARCH
            this.$store.commit("updateSearch", e.target.value)
            this.getFilterResults()
        },
        updateSkills(e){ // UPDATE SKILLS
            this.$store.commit("updateSkills", e)
            this.getFilterResults()
        },
        updateFulltime(e){ // UPDATE FULLTIME
            this.$store.commit("updateFulltime", e)
            this.getFilterResults()
        },
        updateParttime(e){ // UPDATE PARTTIME
            this.$store.commit("updateParttime", e)
            this.getFilterResults()
        },
        updateRemote(e){ // UPDATE REMOTE
            this.$store.commit("updateRemote", e)
            this.getFilterResults()
        },
        updateContract(e){ // UPDATE CONTRACT
            this.$store.commit("updateContract", e)
            this.getFilterResults()
        },
        updatelevels(e){ // UPDATE LEVELS
            this.$store.commit("updatelevels", e)
            this.getFilterResults()
        },
        getFilterResults(){ // UPDATE FILTERED RESULTS
            this.$store.dispatch("GETFILTERRESULTS")
        }
    },
}
</script>

<style scoped>
/* filter style */
    .searchdiv{
        border: 2px solid #aada20;
        width:100%
    }
    .searchDiv{
        margin:0%;
    }

    .filterScopeDiv{
        position: sticky;
        top: 27%;

    }
    .textcolorgreen{
        color: #aada20;
    }

    .locationStatus{
        margin-left: -9%;
    }

    .webkitbox, .webkitboxStatus{
        display: -webkit-box;
    }
    
    /* media query  for filters*/
    @media (max-width: 767px) {
        .locationStatus, .timeStatus{
            margin-left: 0px;
        }
    }

    @media (min-width: 767px) and (max-width: 1322px) {
        .webkitboxStatus{
          flex: 0 0 100%;
          max-width: 100%;
        }
    }
</style>
