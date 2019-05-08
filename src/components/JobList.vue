<template>
  <div>
      <!-- joblisting div -->
    <div class="jobtitle">
        <span style="font-size:20px;">{{joblist.title}}</span><br><br>
        <div class="row">
            <div class="col-4">
                <span>{{joblist.company}}</span>
            </div>
            <div class="col-4">
                <span v-for="(jobskill,i) in joblist.skils" :key="i">{{jobskill+ '   '}} </span>
            </div>
            <div class="col-4">
                <span>{{joblist.level}}</span>
            </div>
        </div><br>
        <div v-if="joblist.description.length<500">
            <span class="jobdescription">{{joblist.description}}</span>
        </div>
        
        <div class="jobdescription" v-else-if="joblist.description.length>500">
            <more-description :joblistDescription="joblist.description"></more-description><br>
        </div>
        
    </div>
    <button class="btnDetails">Details</button>
<!-- button to show further details about job -->
    <hr>
  </div>
</template>

<script>
import MoreDescription from "@/components/MoreDescription";
export default {
    components:{
        MoreDescription
    },
    props: {
        joblist: { //joblist object coming from get jobs
          type: Object,
          default: null
        }
    },
}
</script>

<style scoped>
/* job listing style */
    .jobtitle{
        text-align: justify;
        color: #aada20;
    }

    .btnDetails{
        background: #aada20;
        color: #fff;
        border: transparent;
        font-size: 19px;
        float: right;
        padding: 6px 25px 6px 25px;
    }
    hr{
        margin-top: 50px;
        border-top: 1px solid #aada20;
    }
    .morecontent, .lesscontent{
        cursor: pointer;
        color: #638604;
    }
</style>

