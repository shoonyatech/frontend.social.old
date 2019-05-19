<template>
  <div>
      <!--  Conference listing div -->
    <div class="jobtitle">
        <div class="row">
            <div class="col-4">
                <span>{{conflist.name}}</span>
            </div>
            <div class="col-6">
                <!-- data to come -->
                <span style="float:right;">{{this.convertfromDate(conflist.dateFrom)}}</span>
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
    created() {
        this.convertfromDate(this.conflist.dateFrom)
    },
    props: {
        conflist: { // Conference list object coming from get jobs
          type: Object,
          default: null
        }
    },
    methods: {
        detailJob(link){
            window.open(link, "_blank");   
        },
        convertfromDate(str) {
            var date = new Date(str),
            mnth = ("0" + (date.getMonth()+1)).slice(-2),
            day  = ("0" + date.getDate()).slice(-2);
            return [ date.getFullYear(), mnth, day ].join("-");
        },
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

