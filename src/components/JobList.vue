<template>
  <div>
    <div class="jobtitle">
        <span>{{joblist.description}}</span>
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
    created() {
        console.log(this.joblist)
    },
}
</script>

<style scoped>
    .jobtitle{
        text-align: -webkit-auto;
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

