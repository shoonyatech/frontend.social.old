<template>
<!-- filter confrence scope div -->
    <div class="filterScopeDiv">
        <div class="row searchDiv">
            <input class="searchdiv" placeholder= "Search..." :value="searchtextForCity" @input="updateSearch">
        </div>
        
        <div class="row skills mt-5">
            <div class="col-12 col-md-12 col-sm-1">
                 <b-form-group>
                    <b-form-checkbox-group class="skillscheckbox textcolorgreen" v-model="selectedSkilsForCity" name="flavour-2a" stacked v-on:change="updateSkills">
                        <b-form-checkbox class="col-md-2 webkitbox" value="React">React</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Angular">Angular</b-form-checkbox>
                        <b-form-checkbox class="col-md-2 webkitbox" value="Vue">Vue</b-form-checkbox>
                        <b-form-checkbox class="webkitbox" value="Web Components">Web Components</b-form-checkbox>
                    </b-form-checkbox-group>
                 </b-form-group>
            </div>
        </div>
        <!-- city search div -->
        <div class="row searchDiv">
            <input class="searchdiv" placeholder= "City..." :value="searchCitytext" @input="updateSearchCity">
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
     computed: mapState([ // getting data from store
      "searchtextForCity", "selectedSkilsForCity", "searchCitytext",
    ]),

    methods: {
        updateSearch(e) { // UPDATE SEARCH IN CITY
            this.$store.commit("updateCitySearch", e.target.value);
            this.getFilterResults();
        },
        updateSkills(e) { // UPDATE SKILLS IN CITY
            this.$store.commit("updateCitySkills", e);
            this.getFilterResults();
        },
        updateSearchCity(e) { // UPDATE SEARCHCITY IN CITY
            this.$store.commit("updateSearchCity", e.target.value);
            this.getFilterResults();
        },

        getFilterResults() { // GET FILTERED RESULTS
            this.$store.dispatch("GETCITYFILTERRESULTS");
        },
    },
};
</script>

<style scoped>
/* filter style */
    .searchdiv{
        border: 2px solid #aada20;
        width:100%
    }
    .searchDiv{
        margin:0%;
    }

    .filterScopeDiv{
        position: sticky;
        top: 27%;

    }
    .textcolorgreen{
        color: #aada20;
    }

    .locationStatus{
        margin-left: -9%;
    }

    .webkitbox, .webkitboxStatus{
        display: -webkit-box;
    }
    
    /* media query  for filters*/
    @media (max-width: 767px) {
        .locationStatus, .timeStatus{
            margin-left: 0px;
        }
    }

    @media (min-width: 767px) and (max-width: 1322px) {
        .webkitboxStatus{
          flex: 0 0 100%;
          max-width: 100%;
        }
    }
</style>
