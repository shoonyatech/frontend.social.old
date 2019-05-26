<template>
<!-- div for City search Devlopers and designers count -->
    <div class="CitysearchDevcount">
        <div class="row">
            <div class="col-md-7 divshift">
                <div id="hp_imgs">
                    <img src="http://9ammusic.com/images/hp/2.jpg">
                </div>
            </div>
            <div class="col-md-5">
                <div class="devCounts" style="float:left">
                    <span class="textcolorgreen font" >{{getCity}}</span><br>
                    <span class="textcolorgreen font">{{reactDevLength.length + ' react devs'}}</span><br>
                    <span class="textcolorgreen font">{{angularDevLength.length + ' angular devs'}}</span><br>
                    <span class="textcolorgreen font">{{conferenceLength.length + ' conferences'}}</span><br>
                    <span class="textcolorgreen font">{{meetupsLength.length+ ' meetups'}}</span>
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

@media (min-width: 916px) and (max-width: 1010px) {
  .font{
    font-size: 18px;
  }
}

@media (min-width: 768px) and (max-width: 916px) {
  .font{
    font-size: 16px;
  }
}
@media (min-width: 598px) and (max-width: 668px) {
  .font{
    font-size: 18px;
  }
}
/* @media (min-width: 540px) and (max-width: 698px) {
  .font{
    font-size: 16px;
  }
} */
@media (max-width: 768px) {
  #hp_imgs img {
      float: none !important;
  }
  .devCounts{
      float: none !important;
  }
}
@media (min-width: 606px) and (max-width: 668px) {
  .divshift {
      width:92% !important;
  }
  .font{
    font-size: 18px;
  }
}
@media (min-width: 560px) and (max-width: 606px) {
  .divshift {
      width:82% !important;
  }
  .font{
    font-size: 18px;
  }
}
@media (min-width: 490px) and (max-width: 566px) {
  .divshift {
      width:75% !important;
  }
  .font{
    font-size: 18px;
  }
}
@media (min-width: 440px) and (max-width: 490px) {
  .divshift {
      width:75% !important;
  }
  .font{
    font-size: 18px;
  }
}
@media (min-width: 400px) and (max-width: 440px) {
  .divshift {
      width:71% !important;
  }
  .font{
    font-size: 16px;
  }
  .devCounts{
      margin-left: -28px;
  }
}
@media (min-width: 350px) and (max-width: 400px) {
  .divshift {
      width:70% !important;
  }
  .font{
    font-size: 16px;
  }
  .devCounts{
      margin-left: -28px;
  }
}
@media (min-width: 300px) and (max-width: 350px) {
  .divshift {
      width:68% !important;
  }
  .font{
    font-size: 16px;
  }
  .devCounts{
      margin-left: -28px;
  }
}
</style>
