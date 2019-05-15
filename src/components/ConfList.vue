<template>
  <div>
      <!--  Conference listing div -->
    <div class="jobtitle">
        <!-- <span style="font-size:20px;">{{conflist.title}}</span><br><br> -->
        <div class="row">
            <div class="col-4">
                <span>{{conflist.company}}</span>
            </div>
            <!-- <div class="col-4">
                <span v-for="(conflist,i) in conflist.skils" :key="i">{{conflist+ '   '}} </span>
            </div> -->
            <div class="col-6">
                <!-- data to come -->
                <span style="float:right;">{{conflist.level}}</span>
            </div>
        </div><br>
        <div v-if="conflist.description.length<500">
            <span class="jobdescription">{{conflist.description}}</span>
        </div>
        
        <div class="jobdescription" v-else-if="conflist.description.length>500">
            <more-description :moreDescription="conflist.description"></more-description><br>
        </div>
        
    </div>
    <!-- link to come -->
    <button class="btnDetails" @click="detailJob(conflist.link)">Details</button>
<!-- button to show further details about Conference -->
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
        conflist: { // Conference list object coming from get jobs
          type: Object,
          default: null
        }
    },
    created() {
        // if(this.conflist.level === 1){
        //     this.conflist.level = "Junior"
        // }else if(this.conflist.level === 2){
        //     this.conflist.level = "Intermediate"
        // }else{
        //     this.conflist.level = "Senior" 
        // }
    },
    methods: {
        detailJob(link){
            window.open(link, "_blank");   
        }
    },
}
</script>

<style scoped>
/* Conference listing style */
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

