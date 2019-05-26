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

@media (min-width: 511px) and (max-width: 555px) {
  .textcolorgreen{
    font-size: 19px;
  }
}
@media (min-width: 470px) and (max-width: 511px) {
  .textcolorgreen{
    font-size: 17px;
  }
}
@media (min-width: 425px) and (max-width: 470px) {
  .textcolorgreen{
    font-size: 15px;
  }
}
@media (min-width: 390px) and (max-width: 425px) {
  .textcolorgreen{
    font-size: 13px;
  }
}
@media (min-width: 370px) and (max-width: 390px) {
  .textcolorgreen{
    font-size: 12px;
  }
}
@media (min-width: 350px) and (max-width: 370px) {
  .textcolorgreen{
    font-size: 11px;
  }
}
@media (max-width: 350px) {
  .textcolorgreen{
    font-size: 10px;
  }
}
</style>
