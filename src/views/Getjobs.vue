<template>
<!-- get job div -->
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="row mt-4" style="margin: 0; position: relative;">
            <!-- listing of all jobs -->
            <div class="col-md-10" id="menu">
                <job-list v-for="joblist in this.$store.state.getAllJobs" :key="'job-id-' + joblist._id" :joblist="joblist"/>
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
            var app = this
            window.onscroll = x=> {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    app.$store.state.pageNoI++
                    this.getScrollResult();
                }
            }
        },
        processForm(){ //get job api
            Request.getData("job").then((response) => {
              if ( response.status === 200 ){
                  for( let i = 0; i < this.$store.state.itemsPerPage; i++ ) {
                    this.$store.state.getAllJobs.push( response.data[i] )
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
</style>

