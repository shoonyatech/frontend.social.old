<template>
    <div class="">
        <div class="mt-4 row">
            <input class="inputCityDiv" placeholder="  City..." :value="cityConf" @input="citySearch">
        </div>
            <br><br>
        <div class="mt-4 row">
            <div class="col-7">
                <citysearch-devcount></citysearch-devcount>
            </div>

            <div class="col-5">
                <citysearch-devdisp></citysearch-devdisp>
            </div>
        </div>
    </div>
</template>

<script>
import CitysearchDevdisp from "@/components/CitysearchDevdisp";
import CitysearchDevcount from "@/components/CitysearchDevcount";
import { mapState, mapActions } from "vuex"
export default {
    components: {
        CitysearchDevcount, CitysearchDevdisp
    },
    computed: mapState([ //getting data from store
      "cityConf"
    ]),
    created() {
        this.citySearchcatch()
    },
    methods: {
          citySearch (e) { // UPDATE SEARCH
             this.$store.commit("citySearch", e.target.value)
             this.$store.dispatch("GETCONFORMEET")
             this.$store.dispatch("GETDEVELOPER")
        },
        citySearchcatch () { // UPDATE SEARCH
             this.$store.commit("citySearch", '')
             this.$store.dispatch("GETCONFORMEET")
             this.$store.dispatch("GETDEVELOPER")
        },
    }
}
</script>


<style scoped>
.inputCityDiv{
    border: 4px solid #aada20;
    display: inline-block;
    margin: 0 auto;
    width: 12%;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #aada18;
}
</style>
