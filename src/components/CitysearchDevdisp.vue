<template>
<!-- div for showing  data in respect to city search -->
    <div class="citySEarchDevDivs">
        <div class="DevloperssDiv mt-2">
            <div class="row" v-if="getCity">
                <span class="textcolorgreen">Developers from {{getCity}}</span>
            </div>
            <div class="row" v-else>
                <span class="textcolorgreen">Developers from . . . . .</span>
            </div>
            <div class="row developersImages mt-3"  v-if="developersCount.length>0">
                <div class="imageparent col-2" v-for="dcount in developersCount" :key="'dcount-id-' + dcount._id">
                    <img class="imageTag" v-bind:src="dcount.profilePic" v-bind:title="dcount.name" v-bind:alt="dcount.name" >
                </div>
            </div>
            <div class="row developersImages mt-3" v-else>
                <span class="ml-3 textcolorgreen">N/A</span>
            </div>
        </div>
        <div class="DesignersDiv">
            <div class="row" v-if="getCity">
                <span class="textcolorgreen">Designers from {{getCity}}</span>
            </div>
            <div class="row" v-else>
                <span class="textcolorgreen">Designers from . . . . .</span>
            </div>
            <div class="row designerImages mt-3"  v-if="designersCount.length>0">
                <div class="imageparent col-2" v-for="dcount in designersCount" :key="'dcount-id-' + dcount._id">
                    <img class="imageTag" v-bind:src="dcount.profilePic" v-bind:title="dcount.name" v-bind:alt="dcount.name" >
                </div>
            </div>
            <div class="row designerImages mt-3" v-else>
                <span class="ml-3 textcolorgreen">N/A</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState([ // getting data from store
      "developersCount", "cityConf", "designersCount",
    ]),
    getCity() {  // get city function
        //   if ( this.developersCount.length > 0 || this.designersCount.length > 0 ) {
                return this.cityConf;
            // }
      },
    },
};
</script>

<style scoped>
/* style for city search dev div page */
 .imageTag{
    border-radius: 50%;
    border: 1px solid #aada18;
    display: block;
    max-width: 80%;
    height: auto;
    padding: 3px;
 }
 .textcolorgreen{
    color: #aada20;
    font-size: 21px;

 }
 .DesignersDiv{
     margin-top: 10%;
 }

 @media (max-width: 768px) {
  .DevloperssDiv{
      margin-top: 3rem !important;
  }
}
 @media (min-width: 1500px) and (max-width: 1800px) {
  .imageparent{
      flex: 0 0 20% !important;
      max-width: 20% !important;
  }
}

 @media (min-width: 1000px) and (max-width: 1500px) {
  .imageparent{
      flex: 0 0 23% !important;
      max-width: 23% !important;
  }
}

 @media (min-width: 768px) and (max-width: 1000px) {
  .imageparent{
      flex: 0 0 33% !important;
      max-width: 33% !important;
  }
}

 @media (min-width: 415px) and (max-width: 576px) {
  .imageparent{
      flex: 0 0 20% !important;
      max-width: 20% !important;
  }
}

 @media (min-width: 215px) and (max-width: 415px) {
  .imageparent{
      flex: 0 0 25% !important;
      max-width: 25% !important;
  }
}
</style>

