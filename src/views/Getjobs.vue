<template>
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="row mt-4" style="margin: 0;">
            <div class="col-md-10" id="menu">
                <job-list v-for="joblist in this.$store.state.getAllJobs" :key="'job-id-' + joblist._id" :joblist="joblist"/>
            </div>

            <div class="col-md-2">
                <filter-scope></filter-scope>
            </div>
        </div>
    </div>
</template>

<script>
import Request from '@/services/Request'
import JobList from '@/components/JobList'
import FilterScope from '@/components/FilterScope'
export default {
    data() {
        return {
        }
    },
    components:{
        JobList,
        FilterScope
    },
    created() {
        this.processForm()
    },
    methods: {
        processForm(){
            Request.getData('job').then((response)=>{
              if(response.status === 200){
                //   this.joblists =this.$store.state.getAllJobs = response.data
                  this.$store.state.getAllJobs = response.data
                // alert('get job successfully!')
              }
            }).catch((error)=>{
              if(error.response.status == 500){
              }
            })
        }
    },
}
</script>

<style scoped>
.getJob{
    text-align: -webkit-auto;
    color: #000000;
    font-size: 23px;
}

.getJobHeader{
    margin-left: 5%;
}

/* .vl {
  border-left: 2px solid green;
  height: 100px;
} */
#menu
{
    /* position: absolute; */
    border-right: 3px solid #aada20;
    top: 0;
    bottom: 0;
}
</style>

