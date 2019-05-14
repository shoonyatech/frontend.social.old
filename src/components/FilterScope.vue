<template>
<!-- filter scope div -->
    <div class="filterScopeDiv">
        <div class="row searchDiv">
            <input class="searchdiv" placeholder= "Search..." v-model="searchtext" v-on:change="onChangesSearch">
        </div>
        <div class="row skills mt-5">
            <div class="col-12 col-md-12 col-sm-1">
                 <b-form-group>
                    <b-form-checkbox-group class="skillscheckbox textcolorgreen" v-model="selectedSkils" name="flavour-2a" stacked v-on:change="onChangesSkills">
                        <b-form-checkbox class="col-md-2 webkitbox" value="React">React</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Angular">Angular</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Vue">Vue</b-form-checkbox>
                        <b-form-checkbox class="webkitbox" value="Web Components">Web Components</b-form-checkbox>
                    </b-form-checkbox-group>
                 </b-form-group>
            </div>
        </div>

        <div class="row mt-5 ml-0 timeStatus">
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="fulltimestatus" name="fulltimestatus" v-on:change="onChangesFulltime">
              <span>Full time</span>
            </b-form-checkbox>
            
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="parttimestatus" name="parttimestatus" v-on:change="onChangesParttime">
              <span>Part time</span>
            </b-form-checkbox>
        </div>
        
        <div class="row mt-5 ml-0 locationStatus">
            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="remotestatus" name="remotestatus" v-on:change="onChangesRemote">
              <span>Remote</span>
            </b-form-checkbox>

            <b-form-checkbox class="col-md-6 textcolorgreen webkitboxStatus" v-model="Contractstatus" name="Contractstatus" v-on:change="onChangesContract">
              <span>Contract</span>
            </b-form-checkbox>
        </div>

        <div class="row level mt-5">
            <div class="col-1 col-sm-1 leveldowndiv">
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 1 v-on:change="onChangeslevels">Junior</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 2 v-on:change="onChangeslevels">Intermediate</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value= 3 v-on:change="onChangeslevels">Senior</b-form-radio>
            </div>
        </div>
    </div>
</template>

<script>
import Request from "@/services/Request"
export default {
    data() {
        return {
            searchtext: "",
            selectedSkils: [],
            fulltimestatus: false, parttimestatus: false, remotestatus: false, Contractstatus: false,
            selectedlevels: 2,
            searchFilter: [],
        }
    },
    mounted() {
        this.getFilterResults()
    },
    methods: {
        onChangesSearch(){ 
            this.getFilterResults()
        },
        onChangesSkills(x){ 
            this.selectedSkils = x
            this.getFilterResults()
        },
        onChangesFulltime(x){ 
            this.fulltimestatus = x
            this.getFilterResults()
        },
        onChangesParttime(x){ 
            this.parttimestatus = x
            this.getFilterResults()
        },
        onChangesRemote(x){ 
            this.remotestatus = x
            this.getFilterResults()
        },
        onChangesContract(x){ 
            this.Contractstatus = x
            this.getFilterResults()
        },
        onChangeslevels(x){
            this.selectedlevels = x
            this.getFilterResults()
        },

        getFilterResults(){ //get filtered jobs
            Request.getData('job?searchText='+this.searchtext+'&skills='+this.selectedSkils.toString()+'&isFullTime='+this.fulltimestatus+'&isPartTime='+this.parttimestatus+'&isRemote='+this.remotestatus+'&isContract='+this.Contractstatus+'&level='+this.selectedlevels+'').then((response) => {
              if( response.status === 200 ){
                  this.$store.state.getAllJobs = response.data
              }
            }).catch( (error )=>{
              if (error.response.status === 500 ){
              }
            })
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
