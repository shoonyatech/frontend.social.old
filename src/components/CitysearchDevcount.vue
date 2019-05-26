<template>
<!-- div for City search Devlopers and designers count -->
    <div class="CitysearchDevcount">
        <div class="row">
            <div class="col-7">
                <div id="hp_imgs">
                    <img src="http://9ammusic.com/images/hp/2.jpg">
                </div>
            </div>
            <div class="col-5">
                <div class="" style="float:left">
                    <span class="textcolorgreen" >{{getCity}}</span><br>
                    <span class="textcolorgreen">{{reactDevLength.length + ' react devs'}}</span><br>
                    <span class="textcolorgreen">{{angularDevLength.length + ' angular devs'}}</span><br>
                    <span class="textcolorgreen">{{conferenceLength.length + ' conferences'}}</span><br>
                    <span class="textcolorgreen">{{meetupsLength.length+ ' meetups'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
      ...mapState([
            "cityConf", "getAllconfs", "conferenceLength", "meetupsLength",
            "angularDevLength", "reactDevLength", "getAllDevelopers",
        ]),
      getCity() {  // get city function
          if ( this.getAllconfs.length > 0 || this.getAllDevelopers.length > 0 ) {
                return this.cityConf;
            }
      },
    },
};
</script>

<style scoped>
/* style for getting city */
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
