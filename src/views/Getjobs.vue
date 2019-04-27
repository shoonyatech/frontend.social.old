<template>
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="row mt-4">
            <div class="col-md-8">
                <job-list v-for="joblist in this.joblists" :key="'job-id-' + joblist._id" :joblist="joblist"/>
            </div>
            <div class="col-md-4">
dutt
            </div>
        </div>
    </div>
</template>

<script>
import Request from '@/services/Request'
import JobList from '@/components/JobList'
export default {
    data() {
        return {
            joblists: []
        }
    },
    components:{
        JobList
    },
    created() {
        this.processForm()
    },
    methods: {
        processForm(){
            Request.getData('job').then((response)=>{
              if(response.status === 200){
                  console.log('jobsdetails', response.data)
                  this.joblists =this.$store.state.getAllJobs = response.data
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

</style>

