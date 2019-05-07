<template>
  <div>
    <div class="jobtitle">
        <span style="font-size:20px;">{{joblist.title}}</span><br><br>
        <!-- <span>{{joblist.company}}</span>
        <span v-for="jobskill in joblist.skils">{{jobskill}}     </span><br>
        <span>{{joblist.level}}</span> -->
        <div class="row">
            <div class="col-4">
                <span>{{joblist.company}}</span>
            </div>
            <div class="col-4">
                <span v-for="jobskill in joblist.skils">{{jobskill}}</span>
            </div>
            <div class="col-4">
                <span>{{joblist.level}}</span>
            </div>
        </div><br>
        <span class="jobdescription">{{joblist.description}}</span><br>
        
        
        <a style="font-size:20px" v-if="showmore" v-on:click="show_more()">show more</a>
        <a style="font-size:20px" v-if="showless">show less</a>
    </div>
    <button class="btnDetails">Details</button>

    <hr>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showmore: false,
            showless: false,
            hiddencontent: ''

        }
    },
    props: {
        joblist: {
          type: Object,
          default: null
        }
    },
    created() {
        
    },
    mounted() {
        
        if(this.joblist.description.length>512){
            var showChar = 512;
            var ellipsestext = "...";
            var moretext = "moreclick";
            var lesstext = "less";
            var showcontent = this.joblist.description.substr(0, showChar)+ ' .....';
            var hiddencontent = this.joblist.description.substr(showChar-1, this.joblist.description.length - showChar);
            var html = showcontent + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent><span display: none;>'
                         + hiddencontent + '</span>&nbsp;&nbsp;<a ref="mydiv" href="" class="morelink">' + moretext + '</a></span>';
            // this.showmore = true 
            // this.joblist.description = html
            this.$el.getElementsByClassName('jobdescription')[0].innerHTML = html
            // this.showmore = true
        }
    //     this.$refs['mydiv'].addEventListener('click', function(event) {
    // //         event.preventDefault();
    // //   console.log('clicked: ', event.target);
    //     })

        // $(".morelink").click(function(){
        //     if($(this).hasClass("less")) {
        //         $(this).removeClass("less");
        //         $(this).html(moretext);
        //     } else {   
        //         $(this).addClass("less");
        //         $(this).html(lesstext);
        //     }
        //     $(this).parent().prev().toggle();
        //     $(this).prev().toggle();
        //     return false;
        // });
    },

    methods: {
        show_more(){
            this.joblist.description =this.joblist.description
        },
        asd(){alert()}
    },
}
</script>

<style scoped>
    .jobtitle{
        text-align: justify;
        color: #aada20;
    }

    .btnDetails{
        background: #aada20;
        color: #fff;
        border: transparent;
        font-size: 19px;
        float: right;
        padding: 6px 25px 6px 25px;
    }
    hr{
        margin-top: 50px;
        border-top: 1px solid #aada20;
    }
</style>

