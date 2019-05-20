<template>
<!-- div for showing  data in respect to city search -->
    <div class="citySEarchDevDivs">
        <div class="DevloperssDiv mt-4" v-if="developersCount.length>0">
            <div class="row">
                <span class="textcolorgreen">Developers from {{cityConf}}</span>
            </div>
            <div class="row develoeprImages mt-2">
                <div class="imageparent col-2" v-for="dcount in developersCount" :key="'dcount-id-' + dcount._id">
                    <img class="imageTag" v-bind:src="dcount.profilePic" v-bind:title="dcount.name" v-bind:alt="dcount.name" >
                </div>
            </div>
        </div>
        <div class="DesignersDiv mt-4" v-if="designersCount.length>0">
            <div class="row">
                <span class="textcolorgreen">Designers from {{cityConf}}</span>
            </div>
            <div class="row designerImages mt-2">
                <div class="imageparent col-2" v-for="dcount in designersCount" :key="'dcount-id-' + dcount._id">
                    <img class="imageTag" v-bind:src="dcount.profilePic" v-bind:title="dcount.name" v-bind:alt="dcount.name" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    computed: mapState([ //getting data from store
      "developersCount", "cityConf", "designersCount"
    ]),
}
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

