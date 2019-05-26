<template>
<!-- div for searching city -->
    <div class="">
        <div class="mt-4 row">
            <input class="inputCityDiv" placeholder="  City..." :value="cityConf" @input="citySearch">
        </div>
            <br><br>
        <div class="scroll">
            <div class="mt-4 row">
                <div class="col-md-9 devcount">
                    <citysearch-devcount></citysearch-devcount>
                </div>
<!-- get developers and desiners details -->
                <div class="col-md-3 devdisp">
                    <citysearch-devdisp></citysearch-devdisp>
                </div>
            </div>
            <div class="mt-4 row">
                <div class="col-12">
                    <citysearch-devpics></citysearch-devpics>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CitysearchDevcount from "@/components/CitysearchDevcount";
import CitysearchDevdisp from "@/components/CitysearchDevdisp";
import citysearchDevpics from "@/components/citysearchDevpics";
import { mapActions, mapState } from "vuex";
export default {
    components: {
        CitysearchDevcount, CitysearchDevdisp, citysearchDevpics,
    },
    computed: mapState([ // getting data from store
      "cityConf",
    ]),
    created() {
        this.citySearchcatch(); // city search
    },
    methods: {
        citySearch(e) { // city SEARCH
             this.$store.commit("citySearch", e.target.value);
             this.$store.dispatch("GETCONFORMEET");
             this.$store.dispatch("GETDEVELOPER");
        },
        citySearchcatch() { // UPDATE SEARCH
             this.$store.commit("citySearch", "");
             this.$store.dispatch("GETCONFORMEET");
             this.$store.dispatch("GETDEVELOPER");
        },
    },
};
</script>

<style scoped>
/* style for city search page */
.inputCityDiv{
    border: 3px solid #aada20;
    display: inline-block;
    margin: 0 auto;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #aada18;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .devcount{
    flex: 0 0 65%;
    max-width: 65%;
  }
  .devdisp{
    flex: 0 0 35%;
    max-width: 35%;
  }
}
</style>
