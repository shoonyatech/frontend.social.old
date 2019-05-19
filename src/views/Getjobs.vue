<template>
<!-- get job div -->
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="row mt-4" style="margin: 0; position: relative;">
            <!-- listing of all jobs -->
            <div class="col-md-10" id="menu">
                <job-list v-for="joblist in this.getAllJobs" :key="'job-id-' + joblist._id" :joblist="joblist"/>
                <span class="noResult" v-if="this.$store.state.noResultshow">No result found!! Please try with different filter.</span>

            </div>
            <!-- filter component for gt jobs -->
            <div class="col-md-2">
                <filter-scope></filter-scope>
            </div>
        </div>
    </div>
</template>

<script>
import Request from "@/services/Request";
import JobList from "@/components/JobList";
import FilterScope from "@/components/FilterScope";
import { mapState, mapActions } from "vuex"
export default {
    computed: mapState([ //getting data from store
     "getAllJobs"
    ]),
    components:{
        JobList,
        FilterScope,
    },
    created() {
        this.processForm();
        
    },
    mounted() {
        this.ScrollChecked();
    },
    methods: {
        ScrollChecked(){ //SCROLL CHECK IF BOTTOM TOUCHED
            var vim = this
            window.onscroll = x=> {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
                    vim.$store.state.pageNoI++
                    this.getScrollResult();
                }
            }
        },
        processForm(){  //get job api
          var vim = this;
            Request.getData("job").then((response) => {
              if ( response.status === 200 ){
                  if(response.data.length<vim.$store.state.itemsPerPage){
                     var checkStage = response.data.length
                  }else{
                      checkStage = vim.$store.state.itemsPerPage
                  }
                  for( let i = 0; i < checkStage; i++ ) {
                    if (response.data.length === 0) {
                      vim.getAllJobs = [];
                      vim.$store.state.noResultshow = true;
                    }else{
                        vim.$store.state.noResultshow = false;
                      vim.getAllJobs.push( response.data[i] )
                    }
                  }
              }
            }).catch((error) => {
              if ( error.response.status === 500 ) {
                  alert("error");
              }
            });
        },
        getScrollResult() { //get more data on scroll
            this.$store.dispatch("GETSCROLLRESULTS");
        },
    },
};
</script>

<style scoped>
/* get job css */
.getJob{
    text-align: -webkit-auto;
    color: #000000;
    font-size: 23px;
}

.getJobHeader{
    margin-left: 5%;
}
#menu{
    border-right: 3px solid #aada20;
    top: 0;
    bottom: 0;
}
.noResult{
    text-align: justify;
    color: #aada20;
}
</style>

