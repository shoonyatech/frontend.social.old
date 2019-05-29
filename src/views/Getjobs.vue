<template>
<!-- get job div -->
    <div class="getJobHeader">
        <div class="getJob mt-4">
            Jobs relevant to your skills
        </div>
        <div class="cont row mt-4" style="margin: 0; position: relative;">
            <!-- listing of all jobs -->
            <div class="col-md-10" id="menu">
                <job-list v-for="joblist in this.getAllJobs" :key="'job-id-' + joblist._id" :joblist="joblist"/>
                <span class="noResult" v-if="this.$store.state.noResultshow">No result found!! Please try with different filter.</span>

            </div>
            <!-- filter component for gt jobs -->
            <div class="col-md-2">
                <filter-scope></filter-scope>
            </div>
        </div>
    </div>
</template>

<script>
import FilterScope from "@/components/FilterScope";
import JobList from "@/components/JobList";
import { mapActions, mapState } from "vuex";
export default {
    computed: mapState([ // getting data from store
     "getAllJobs",
    ]),
    components: {
        JobList,
        FilterScope,
    },
    created() {
        this.processForm();
    },
    mounted() {
        this.ScrollChecked();
    },
    methods: {
        ScrollChecked() { // SCROLL CHECK IF BOTTOM TOUCHED
            const vim = this;
            window.onscroll = (x) => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    vim.$store.state.pageNoI++;
                    this.getScrollResult();
                }
            };
        },
        processForm() {  // actionsget job api
          this.$store.dispatch("GETJOB");
        },
        getScrollResult() { // get more data on scroll
            this.$store.dispatch("GETSCROLLRESULTS");
        },
    },
};
</script>

<style scoped>
/* get job css */
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
    border-right: 0;
}
.noResult{
    text-align: justify;
    color: #aada20;
}

@media screen and (max-width: 767px) {
    .cont { display: flex; flex-flow: column-reverse; }
    #menu{
        margin-top: 7%;
    }
}
</style>

