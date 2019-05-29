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
                <div class="devCounts">
                    <!-- <span class="textcolorgreen textalign" >{{getCity}}</span><br>
                    <span class="textcolorgreen textalign">{{reactDevLength.length + ' react devs'}}</span><br>
                    <span class="textcolorgreen textalign">{{angularDevLength.length + ' angular devs'}}</span><br>
                    <span class="textcolorgreen textalign">{{conferenceLength.length + ' conferences'}}</span><br>
                    <span class="textcolorgreen textalign">{{meetupsLength.length+ ' meetups'}}</span> -->

                    <div class="row">
                      <div class="col-12 col-md-12 col-sm-12 fullsizeOnmaxwidth">
                        <span class="textcolorgreen textalign" >{{getCity}}</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
                        <span class="textcolorgreen textalign">{{reactDevLength.length + ' react devs'}}</span>
                      </div>
                      <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
                        <span class="textcolorgreen textalign">{{angularDevLength.length + ' angular devs'}}</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
                        <span class="textcolorgreen textalign">{{conferenceLength.length + ' conferences'}}</span>
                      </div>
                      <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
                        <span class="textcolorgreen textalign">{{meetupsLength.length+ ' meetups'}}</span>
                      </div>
                    </div>
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
	/* width:66%; */
    /* float: right; */
}

#hp_imgs img {
	margin:2px;
	border-radius:4px;
  border: 4px solid #aada18;
	/* display: block; */
	max-width:100%;
	height:auto;
  padding: 3px;
  float: left;
}
.textcolorgreen{
  color: #aada20;
  font-size: 21px;
  display: -webkit-box;
}

@media (min-width: 300px) and (max-width: 768px) {
  #hp_imgs{
    float: none;
  }
}
@media (min-width: 820px) and (max-width: 1060px) {
  .textalign{
    font-size: 19px;
  }
}

@media (min-width: 768px) and (max-width: 820px) {
  .textalign{
    font-size: 18px;
  }
}

@media (min-width: 560px) and (max-width: 610px) {
  .textalign{
    font-size: 19px;
  }
}

@media (min-width: 500px) and (max-width: 560px) {
  .textalign{
    font-size: 17px;
  }
}

@media (min-width: 450px) and (max-width: 500px) {
  .textalign{
    font-size: 15px;
  }
}

@media (min-width: 400px) and (max-width: 450px) {
  .textalign{
    font-size: 13px;
  }
}

@media (min-width: 350px) and (max-width: 400px) {
  .textalign{
    font-size: 11px;
  }
}

@media (max-width: 350px) {
  .textalign{
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .fullsizeOnmaxwidth{
    flex: 0 0 100%;
    max-width: 100%;
  }
}
  /* .font{
    font-size: 20px;
  } */

/* @media (min-width: 916px) and (max-width: 1010px) {
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
} */
/* @media (max-width: 768px) {
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
} */
</style>
