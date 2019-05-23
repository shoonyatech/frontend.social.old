<template>
    <div class="row mt-1">
        <div class="col-md-4 col-sm-4 col-xs-4 textcolorgreen"><span>{{upConf.name}}</span></div>
        <div class="col-md-5 col-sm-5 col-xs-5 textcolorgreen"><span>{{this.convertfromDate(upConf.dateFrom)}}</span></div>
        <div class="col-md-3 col-sm-3 col-xs-3"><button class="DetailButton textcolorgreen">Details</button></div>
    </div>
</template>

<script>
export default {
    props: {
        upConf: { // Conference list object coming from get jobs
          type: Object,
          default: null,
        },
    },
    created() {
        this.convertfromDate(this.upConf.dateFrom);
    },
    methods: {
        convertfromDate(str) {
            let date;
            let mnth;
            let day;
            date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day  = ("0" + date.getDate()).slice(-2);
            return [ date.getFullYear(), mnth, day ].join("-");
        },
    },
};
</script>

<style scoped>
.textcolorgreen{
  color: #aada20;
  font-size: 21px;
}
.DetailButton{
    background: none;
    border: none;
    border-bottom: 1px solid #aada20;
}
</style>
