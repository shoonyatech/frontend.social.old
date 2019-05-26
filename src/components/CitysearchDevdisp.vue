<template>
<!-- div for showing  data in respect to city search -->
    <div class="citySEarchDevDivs">
        <div class="DevloperssDiv mt-2"  v-if="getCity">
            <div class="row">
                <span class="textcolorgreen">Developers from {{getCity}}</span>
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
        <div class="DesignersDiv mt-4" v-if="getCity">
            <div class="row">
                <span class="textcolorgreen">Designers from {{getCity}}</span>
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
    max-width: 48%;
    height: auto;
    padding: 3px;
 }
 .textcolorgreen{
    color: #aada20;
    font-size: 21px;

 }
</style>

