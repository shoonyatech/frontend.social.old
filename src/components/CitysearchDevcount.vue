<template>
  <!-- div for City search Devlopers and designers count -->
  <div class="CitysearchDevcount" v-if="cityConf">
    <div class="row">
      <div class="col-md-7 divshift">
        <div id="hp_imgs">
          <img src="http://9ammusic.com/images/hp/2.jpg" />
        </div>
      </div>
      <div class="col-md-5">
        <div class="devCounts">
          <!-- <span class="textcolorgreen textalign" >{{getCity}}</span><br>
                    <span class="textcolorgreen textalign">{{reactDevLength.length + ' react devs'}}</span><br>
                    <span class="textcolorgreen textalign">{{angularDevLength.length + ' angular devs'}}</span><br>
                    <span class="textcolorgreen textalign">{{conferenceLength.length + ' conferences'}}</span><br>
          <span class="textcolorgreen textalign">{{meetupsLength.length+ ' meetups'}}</span>-->

          <div class="row">
            <div class="col-12 col-md-12 col-sm-12 fullsizeOnmaxwidth">
              <span class="textcolorgreen textalign">{{ getCity }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
              <span class="textcolorgreen textalign">{{
                reactDevLength.length + ' react devs'
              }}</span>
            </div>
            <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
              <span class="textcolorgreen textalign">{{
                angularDevLength.length + ' angular devs'
              }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
              <span class="textcolorgreen textalign">{{
                conferenceLength.length + ' conferences'
              }}</span>
            </div>
            <div class="col-6 col-md-6 col-sm-6 fullsizeOnmaxwidth">
              <span class="textcolorgreen textalign">{{
                meetupsLength.length + ' meetups'
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'cityConf',
      'getAllconfs',
      'conferenceLength',
      'meetupsLength',
      'angularDevLength',
      'reactDevLength',
      'getAllDevelopers',
    ]),
    getCity() {
      // get city function
      if (this.getAllconfs.length > 0 || this.getAllDevelopers.length > 0) {
        return this.cityConf;
      }
    },
  },
};
</script>

<style scoped>
/* style for getting city */
.cityIMage {
  border: 4px solid #aada18;
  width: 24%;
  height: 100%;
  padding: 4px;
}

#hp_imgs img {
  margin: 2px;
  border-radius: 4px;
  border: 4px solid #aada18;
  /* display: block; */
  max-width: 100%;
  height: auto;
  padding: 3px;
  float: left;
}
.textcolorgreen {
  color: #aada20;
  font-size: 21px;
  display: -webkit-box;
}

@media (min-width: 300px) and (max-width: 768px) {
  #hp_imgs {
    float: none;
  }
}
@media (min-width: 820px) and (max-width: 1060px) {
  .textalign {
    font-size: 19px;
  }
}

@media (min-width: 768px) and (max-width: 820px) {
  .textalign {
    font-size: 18px;
  }
}

@media (min-width: 560px) and (max-width: 610px) {
  .textalign {
    font-size: 19px;
  }
}

@media (min-width: 500px) and (max-width: 560px) {
  .textalign {
    font-size: 17px;
  }
}

@media (min-width: 450px) and (max-width: 500px) {
  .textalign {
    font-size: 15px;
  }
}

@media (min-width: 400px) and (max-width: 450px) {
  .textalign {
    font-size: 13px;
  }
}

@media (min-width: 350px) and (max-width: 400px) {
  .textalign {
    font-size: 11px;
  }
}

@media (max-width: 350px) {
  .textalign {
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .fullsizeOnmaxwidth {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
