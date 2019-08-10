<template>
  <div class="row mt-1">
    <div class="col-4 col-md-4 textalign textcolorgreen">
      <span>{{ pastConf.name }}</span>
    </div>
    <div class="col-5 col-md-5 textalign textcolorgreen">
      <span>{{ this.convertfromDate(pastConf.dateFrom) }}</span>
    </div>
    <div class="col-3 col-md-3">
      <button class="DetailButton textalign textcolorgreen">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pastConf: {
      // Conference list object coming from get jobs
      type: Object,
      default: null,
    },
  },
  created() {
    this.convertfromDate(this.pastConf.dateFrom);
  },
  methods: {
    convertfromDate(str) {
      let date;
      let mnth;
      let day;
      (date = new Date(str)),
        (mnth = ('0' + (date.getMonth() + 1)).slice(-2)),
        (day = ('0' + date.getDate()).slice(-2));
      return [date.getFullYear(), mnth, day].join('-');
    },
  },
};
</script>

<style scoped>
.textcolorgreen {
  color: #aada20;
  font-size: 21px;
  display: -webkit-box;
}
.DetailButton {
  background: none;
  border: none;
  border-bottom: 1px solid #aada20;
}

@media (min-width: 820px) and (max-width: 1060px) {
  .textalign {
    font-size: 19px;
  }
}

@media (min-width: 768px) and (max-width: 820px) {
  .textalign {
    font-size: 18px;
  }
}

@media (min-width: 560px) and (max-width: 610px) {
  .textalign {
    font-size: 19px;
  }
}

@media (min-width: 500px) and (max-width: 560px) {
  .textalign {
    font-size: 17px;
  }
}

@media (min-width: 450px) and (max-width: 500px) {
  .textalign {
    font-size: 15px;
  }
}

@media (min-width: 400px) and (max-width: 450px) {
  .textalign {
    font-size: 13px;
  }
}

@media (min-width: 350px) and (max-width: 400px) {
  .textalign {
    font-size: 11px;
  }
}

@media (max-width: 350px) {
  .textalign {
    font-size: 10px;
  }
}
</style>
