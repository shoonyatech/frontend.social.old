<template>
  <div>
    <div class="jobtitle">
        <span style="font-size:20px;">{{joblist.title}}</span><br><br>
        <div class="row">
            <div class="col-4">
                <span>{{joblist.company}}</span>
            </div>
            <div class="col-4">
                <span v-for="jobskill in joblist.skils">{{jobskill+ '   '}} </span>
            </div>
            <div class="col-4">
                <span>{{joblist.level}}</span>
            </div>
        </div><br>
        <span class="jobdescription">{{joblist.description}}</span><br>
    </div>
    <button class="btnDetails">Details</button>

    <hr>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        joblist: {
          type: Object,
          default: null
        }
    },
    mounted() {debugger
        
        if(this.joblist.description.length>630){
            var showChar = 630;
            var ellipsestext = ". . . . .";
            var moretext = "Click for more description";
            var lesstext = "Click for less description"; 
            var showcontent = this.joblist.description.substr(0, showChar);
            var hiddencontent = this.joblist.description.substr(showChar-1, this.joblist.description.length - showChar);
            var html = showcontent + '<span class="moreellipses">' + ellipsestext+'</span><span class="morecontent"><span style="display: none;">' + hiddencontent + '</span><br><p class="morelink">' + moretext + '</p><p class="lesslink" style="display:none">' + lesstext + '</p></span>';
            this.$el.getElementsByClassName('jobdescription')[0].innerHTML = html
        }
        
        if(this.joblist.description.length>630){
            this.$el.getElementsByClassName('jobdescription')[0].getElementsByClassName('morelink')[0].addEventListener('click', function(event) {debugger
                this.parentElement.children[0].style.display = "block" //show hidden content
                this.parentElement.parentElement.children[0].style.display = 'none' //more ... hide
                this.style.display = 'none' //more button hide
                this.style.cursor = 'pointer'
                this.nextElementSibling.style.display = "block"  //less button show
            })

            this.$el.getElementsByClassName('jobdescription')[0].getElementsByClassName('lesslink')[0].addEventListener('click', function(event) {debugger
                this.parentElement.children[0].style.display = "none" //hide hidden content
                this.parentElement.parentElement.children[0].style.display = 'block' //more ... show
                this.style.display = 'none' //less button hide
                this.style.cursor = 'pointer'
                this.previousSibling.style.display = "block"  //more button show
            })
        }
    }
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

