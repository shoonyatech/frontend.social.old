<template>
  <!-- div for searching city -->
  <div class="page">
    <div class="mt-4 row">
      <input class="inputCityDiv" placeholder="  City.." @input="citySearch" />
    </div>
    <div class="thumbnail-container">
      <city-thumbnail
        v-for="city in this.allCities"
        :key="'city-id-' + city._id"
        :city="city"
        class="city-card"
      ></city-thumbnail>
      <span class="noResult" v-if="this.$store.state.noResultshow"
        >No result found!! Please try with different filter.</span
      >
    </div>
  </div>
</template>

<script>
import CitysearchDevcount from '@/components/CitysearchDevcount';
import CitysearchDevdisp from '@/components/CitysearchDevdisp';
import citysearchDevpics from '@/components/citysearchDevpics';
import CityThumbnail from '@/components/CityThumbnail';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    CityThumbnail,
    CitysearchDevcount,
    CitysearchDevdisp,
    citysearchDevpics,
  },
  computed: mapState([
    // getting data from store
    'allCities',
  ]),
  created() {
    this.$store.dispatch('GETCITIES');
  },
  methods: {
    citySearch(e) {
      // city SEARCH
      let cityvalue = e.target.value.replace(/^\s+/, '').replace(/\s+$/, '');
      if (cityvalue !== '') {
        cityvalue = cityvalue;
        this.$store.commit('citySearch', cityvalue);
        this.$store.dispatch('GETCITIES');
      }
    },
  },
};
</script>

<style scoped>
/* style for city search page */

.thumbnail-container {
  display: flex;
  flex-wrap: wrap;
  flex-grow: unset;
  flex-shrink: unset;
  flex-direction: row;
}

.city-card {
  margin: 2rem;
  display: inline-block;
}
.inputCityDiv {
  border: 3px solid #aada20;
  display: inline-block;
  margin: 0 auto;
  width: 25%;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #aada18;
}

.devcountPdiv {
  margin-left: 3% !important;
}

@media (min-width: 1144px) and (max-width: 1310px) {
  .devcol {
    max-width: 67%;
    flex: 0 0 67%;
  }
  .inputCityDiv {
    width: 30%;
  }
}

@media (min-width: 990px) and (max-width: 1144px) {
  .devcol {
    max-width: 80%;
    flex: 0 0 80%;
  }
  .inputCityDiv {
    width: 35%;
  }
}

@media (min-width: 768px) and (max-width: 990px) {
  .devcol {
    max-width: 100%;
    flex: 0 0 100%;
  }
  .inputCityDiv {
    width: 40%;
  }
}

@media (min-width: 650px) and (max-width: 768px) {
  .inputCityDiv {
    width: 85%;
  }
}

@media (min-width: 550px) and (max-width: 650px) {
  .inputCityDiv {
    width: 83%;
  }
}

@media (min-width: 450px) and (max-width: 550px) {
  .inputCityDiv {
    width: 78%;
  }
}

@media (min-width: 350px) and (max-width: 450px) {
  .inputCityDiv {
    width: 75%;
  }
}

@media (min-width: 250px) and (max-width: 350px) {
  .inputCityDiv {
    width: 70%;
  }
}

@media (min-width: 1200px) and (max-width: 1805px) {
  .devcountPdiv {
    margin-left: 1rem !important;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .devcountPdiv {
    margin-left: 0.5rem !important;
  }
}
</style>
