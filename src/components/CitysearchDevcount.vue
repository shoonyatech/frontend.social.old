<template>
    <div class="CitysearchDevcount">
        <div class="row">
            <div class="col-7">
                <div id="hp_imgs">
                    <img src="http://9ammusic.com/images/hp/2.jpg">
                </div>
            </div>
            <div class="col-5">
                <div class="" style="float:left">
                    <!-- <span>{{city}}</span> -->
                    <span class="textcolorgreen">{{cityConf}}</span><br>
                    <span class="textcolorgreen">{{reactDevLength.length + ' react devs'}}</span><br>
                    <span class="textcolorgreen">{{angularDevLength.length + ' angular devs'}}</span><br>
                    <span class="textcolorgreen">{{conferenceLength.length + ' conferences'}}</span><br>
                    <span class="textcolorgreen">{{meetupsLength.length+ ' meetups'}}</span>
                </div>
            </div>
        </div>
            <br><br>
        <div class="row">
            <div class="col-5">
                <span class="textcolorgreen">Upcoming Conferences</span>
            </div>
        </div>
            <br>
        <div class="upcomming conferences">
            <!-- Upcoming Conferences -->
            <upcoming-conference v-for="upConf in upcomingConferences" :key="'upConf-id-' + upConf._id" :upConf="upConf"></upcoming-conference>
        </div>
            <br><br>
        <div class="row">
            <div class="col-5">
                <span class="textcolorgreen">Past Conferences</span>
            </div>
        </div>
            <br>
             <!-- Past Conferences -->
        <div class="pastcomming-conferences" >
            <past-conference v-for="pastConf in pastConferences" :key="'pastConf-id-' + pastConf._id" :pastConf="pastConf"></past-conference>
        </div>
    </div>
</template>

<script>
import UpcomingConference from "@/components/UpcomingConference";
import PastConference from "@/components/PastConference";
import CitysearchDevcount from "@/components/CitysearchDevcount";
import { mapState, mapActions } from "vuex"
export default {
    components: {
        CitysearchDevcount, PastConference, UpcomingConference
    },
    computed: mapState([ //getting data from store
      "cityConf", "getAllconfs", "conferenceLength", "meetupsLength", "angularDevLength", "reactDevLength", "pastConferences", "upcomingConferences"
    ]),
}
</script>

<style scoped>
.cityIMage{
    border: 4px solid #aada18;
    width: 24%;
    height: 100%;
    padding: 4px;
}
#hp_imgs {
	width:66%;
    float: right;
}

#hp_imgs img {
	margin:2px;
	border-radius:4px;
    border: 4px solid #aada18;
	display: block;
	max-width:100%;
	height:auto;
    padding: 3px;
    float: right;
}
.textcolorgreen{
  color: #aada20;
  font-size: 21px;
}
</style>
