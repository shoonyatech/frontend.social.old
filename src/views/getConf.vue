<template>
<!-- get Conference div -->
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Conference relevant to your skills
        </div>
        <div class="row mt-4" style="margin: 0; position: relative;">
            <!-- listing of all Conference -->
            <div class="col-md-10" id="menu">
                <conf-list v-for="conflist in this.$store.state.getAllconfs" :key="'job-id-' + conflist._id" :conflist="conflist"/>
                <span class="noResult" v-if="noResultshow">No result found!! Please try with different filter.</span>
            </div>
            <!-- filter component for gt Conference -->
            <div class="col-md-2">
                <filter-confscope></filter-confscope>
            </div>
        </div>
    </div>
</template>

<script>
import Request from "@/services/Request";
import ConfList from "@/components/ConfList";
import FilterConfscope from "@/components/FilterConfscope";
import { mapState, mapActions } from "vuex"
export default {
    components:{
        ConfList,
        FilterConfscope,
    },
    created() {
        this.processForm();
        
    },
    mounted() {
        this.ScrollChecked();
    },
    methods: {
        ScrollChecked(){ //SCROLL CHECK IF BOTTOM TOUCHED
            var app = this
            window.onscroll = x=> {
                if ((window.innerHeight + window.scrollY+ 100) >= document.body.offsetHeight) {
                    app.$store.state.pageNoF++
                    this.getScrollResult();
                }
            }
        },
        processForm(){ //get Conference api
            Request.getData("job").then((response) => {
              if ( response.status === 200 ){
                  for( let i = 0; i < this.$store.state.itemsPerPage; i++ ) {
                    this.$store.state.getAllconfs.push( response.data[i] )
                  }
              }
            }).catch((error) => {
              if ( error.response.status === 500 ) {
                  alert("error");
              }
            });
        },
        getScrollResult() { //get more data on scroll
            this.$store.dispatch("GETCITYSCROLLRESULTS");
        },
    },
};
</script>

<style scoped>
/* get Conference css */
.getJob{
    text-align: -webkit-auto;
    color: #000000;
    font-size: 23px;
}

.getJobHeader{
    margin-left: 5%;
}
#menu{
    border-right: 3px solid #aada20;
    top: 0;
    bottom: 0;
}
.noResult{
    text-align: justify;
    color: #aada20;
}
</style>