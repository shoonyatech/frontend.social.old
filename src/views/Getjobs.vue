<template>
<!-- get job div -->
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="row mt-4" style="margin: 0;">
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
export default {
    components:{
        JobList,
        FilterScope,
    },
    created() {
        this.processForm();
    },
    methods: {
        processForm(){ //get job api
            Request.getData("job").then((response) => {
              if( response.status === 200 ){
                  this.$store.state.getAllJobs = response.data
                  alert("get job successfully!")
              }
            }).catch((error) => {
              if( error.response.status === 500 ){
                  alert("error")
              }
            });
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

