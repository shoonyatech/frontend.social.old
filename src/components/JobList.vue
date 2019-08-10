<template>
  <div>
    <!-- joblisting div -->
    <div class="jobtitle">
      <span style="font-size:20px;" v-if="joblist.title">{{
        joblist.title
      }}</span
      ><br /><br />
      <div class="row">
        <div class="col-4">
          <span v-if="joblist.compnay">{{ joblist.company }}</span>
        </div>
        <div class="col-4" v-if="joblist.skils">
          <span v-for="(jobskill, i) in joblist.skils" :key="i"
            >{{ jobskill + '   ' }}
          </span>
        </div>
        <div class="col-4">
          <span v-if="joblist.level">{{ joblist.level }}</span>
        </div>
      </div>
      <br />
      <div class="" v-if="joblist.description">
        <div v-if="joblist.description.length < 500">
          <span class="jobdescription">{{ joblist.description }}</span>
        </div>

        <div
          class="jobdescription"
          v-else-if="joblist.description.length > 500"
        >
          <more-description
            :moreDescription="joblist.description"
          ></more-description
          ><br />
        </div>
      </div>
    </div>
    <button class="btnDetails" @click="detailJob(joblist.link)">Details</button>
    <!-- button to show further details about job -->
    <hr />
  </div>
</template>

<script>
import MoreDescription from '@/components/MoreDescription';
export default {
  components: {
    MoreDescription,
  },
  props: {
    joblist: {
      // joblist object coming from get jobs
      type: Object,
      default: null,
    },
  },
  created() {
    // change text for level
    if (this.joblist.level === 0) {
      this.joblist.level = 'Junior';
    } else if (this.joblist.level === 1) {
      this.joblist.level = 'Intermediate';
    } else {
      this.joblist.level = 'Senior';
    }
  },
  methods: {
    detailJob(link) {
      // detail click render
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped>
/* job listing style */
.jobtitle {
  text-align: justify;
  color: #aada20;
}

.btnDetails {
  background: #aada20;
  color: #fff;
  border: transparent;
  font-size: 19px;
  float: right;
  padding: 6px 25px 6px 25px;
}
hr {
  margin-top: 50px;
  border-top: 1px solid #aada20;
}
.morecontent,
.lesscontent {
  cursor: pointer;
  color: #638604;
}
</style>
