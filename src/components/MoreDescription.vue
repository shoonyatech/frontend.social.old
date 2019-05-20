<template>
<!-- more description div -->
    <div>
        <span v-if="showWhole">{{moreDescription.substr(0, this.showChar)+ '. . . . .'}}</span>
        <span v-else>{{moreDescription.substr(0, this.showChar) + moreDescription.substr(this.showChar-1, moreDescription.length - this.showChar)}}</span>
        <p v-if="showmore" v-on:click="clickMore()" class="morecontent">Show More</p><br>
        <p v-if="showless" v-on:click="clickLess()" class="lesscontent">Show Less</p>
    </div>
</template>

<script>
import MoreDescription from "@/components/MoreDescription";
export default {
    data() {
        return {
            //show hide description
            showChar: 630, 
            hiddenContent: false, 
            showmore: true, 
            showless: false,
            showWhole: true
        }
    },
    props: {
          moreDescription: String
    },
    methods: {
        clickMore(){ //click more button to show more description
            this.showWhole = !this.showWhole;
            this.showmore = !this.showmore
            this.showless = !this.showless

        },
        clickLess(){ //click less button to show less description
            this.showWhole = !this.showWhole;
            this.showmore = !this.showmore
            this.showless = !this.showless
        }
    },
}
</script>

<style scoped>
/* more desscription style */
    .morecontent, .lesscontent{
        cursor: pointer;
        color: #638604;
    }
</style>