<template>
    <div class="container addJobHeader">
        <div class="addJob mt-4">
            Add Job
        </div>
        <div class="ml-4">
          <form id="AddJobsForm" @submit.prevent="processForm">
            <div class="row title mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Title</span></div>
                <div class="col-md-10 " style="padding-left: 27px !important">
                    <input class="inputDiv" v-model="title">
                </div>
            </div>

            <div class="row description mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Description</span></div>
                <div class="col-md-10 " style="padding-left: 27px !important">
                    <input class="inputDiv" style="height: 100px;" v-model="description">
                </div>
            </div>

            <div class="row skills mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Skills</span></div>
                <!-- <div class=" " style="padding-left: 27px !important">
                    <label class="contain">React
                      <input type="checkbox" checked="checked">
                      <span class="checkmark"></span>
                    </label>
                    <label class="contain">Angular
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                    <label class="contain">Vue
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                    <label class="contain">Web Components
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                </div> -->

                <div class=" " style="padding-left: 27px !important">
                  <b-form-group>
                    <b-form-checkbox-group id="skillscheckbox" v-model="selectedSkils" :options="options" name="flavour-1">

                    </b-form-checkbox-group>
                  </b-form-group>

                  <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->
                </div>
            </div>

            <div class="row city mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">City</span></div>
                <div class="col-md-10 " style="padding-left: 27px !important">
                    <input class="inputDiv" v-model="city">
                </div>
            </div>

            <div class="row compnay mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Compnay</span></div>
                <div class="col-md-10 " style="padding-left: 27px !important">
                    <input class="inputDiv" v-model="compnay">
                </div>
            </div>

            <div class="row durationWorktype mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Duration</span></div>
                <div class="col-md-4">
                    <!-- <label class="contain">Full time
                      <input type="checkbox" checked="checked">
                      <span class="checkmark"></span>
                    </label>
                    <label class="contain">Part time
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label> -->
                  <div class="row">
                    <b-form-checkbox class="col-md-6" id="fulltime" v-model="fulltimestatus" name="fulltimestatus" value="true" unchecked-value="false">
                      Full time
                    </b-form-checkbox>

                    <b-form-checkbox class="col-md-6" id="parttime" v-model="parttimestatus" name="parttimestatus" value="true" unchecked-value="false">
                      Part time
                    </b-form-checkbox>
                  </div>
                  <!-- <div>State: <strong>{{ fulltimestatus }}</strong></div> -->
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4 addJobTitlesDiv"><span class="addJobTitles">Work type</span></div>
                        <div class="col-md-8">
                            <!-- <label class="contain">Remote
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="contain">Contract
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label> -->
                            <div class="row">
                              <b-form-checkbox class="col-md-6" id="remote" v-model="remotestatus" name="remotestatus" value="true" unchecked-value="false">
                                Remote
                              </b-form-checkbox>

                              <b-form-checkbox class="col-md-6" id="Contract" v-model="Contractstatus" name="Contractstatus" value="true" unchecked-value="false">
                                Contract
                              </b-form-checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row level mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Level</span></div>
                  <div class="col-md-10">
                      <div class="" style="padding-left: 27px !important">
                        <b-form-group class= "row">
                          <!-- <div class="col-md-4"> -->
                            <b-form-radio class="col-md-4" v-model="selectedlevels" name="some-radios" value=1>Junior</b-form-radio>
                          <!-- </div> -->
                          <!-- <div class="col-md-4"> -->
                              <!-- <label class="containR">Intermediate
                                <input type="radio" name="radio">
                                <span class="checkmarkR"></span>
                              </label> -->
                            <b-form-radio class="col-md-4" v-model="selectedlevels" name="some-radios" value=2>Intermediate</b-form-radio>
                          <!-- </div> -->
                          <!-- <div class="col-md-4"> -->
                              <!-- <label class="containR">Senior
                                <input type="radio" name="radio">
                                <span class="checkmarkR"></span>
                              </label> -->
                            <b-form-radio class="col-md-4" v-model="selectedlevels" name="some-radios" value=3>Senior</b-form-radio>
                          <!-- </div> -->
                      </b-form-group>
                      <!-- <div class="mt-3">Selected: <strong>{{ selectedlevels }}</strong></div> -->
                  </div>
                </div>
            </div>

            <div class="row tags mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Tags</span></div>
                <div class="col-md-10 " style="padding-left: 27px !important">
                    <input class="inputDiv" v-model="tags">
                </div>
            </div>

            <div class="row link mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Link</span></div>
                <div class="col-md-8 " style="padding-left: 27px !important">
                    <input class="inputDiv" v-model="link">
                </div>
                <div class="col-md-2">
                    <button class="AddButton" type="submit">Add</button>
                </div>
            </div>
          </form>
        </div>
    </div>
</template>


<script>
import Request from '@/services/Request'
export default {
  data() {
    return {
      title: '', description: '', city: '', compnay: '', tags: '', link: '',
      selectedSkils: [], // Must be an array reference!
        options: [
          { text: 'React', value: 'React' },
          { text: 'Angular', value: 'Angular' },
          { text: 'Vue', value: 'Vue' },
          { text: 'Web Components', value: 'WebComponents' }
        ],
        fulltimestatus: false, parttimestatus: false, remotestatus: false, Contractstatus: false,
        selectedlevels: ''
    }
  },
  methods: {
    processForm(){
      debugger
      var payload = {
        "title": this.title, "description": this.description,    "skils": this.selectedSkils, "company": this.compnay,
        "city": this.city,   "isFullTime" : this.fulltimestatus, "isPartTime" : this.parttimestatus,
        "isRemote" : this.remotestatus, "isPermenant" : true,    "isContract" : this.Contractstatus,
        "level": this.selectedlevels,   "tags": this.tags.split(','), "link": this.link
      }
      Request.postData('job', payload).then((response)=>{
        if(response.status === 200){
          alert('job added successfully!')
        }
        }).catch((error)=>{
          if(error.response.status == 500){
          }
        })
    }
    
  },
}
</script>

<style scoped>

/* title and description css */

.addJob{
    text-align: -webkit-auto;
    color: #000000;
    font-weight: bold;
    font-size: x-large;
}

.addJobHeader{
    padding: 0px;
}

.addJobTitles{
    vertical-align: -webkit-baseline-middle;
    color: #aada20;
    font-size: 23px;
    font-weight: bold;  
}

.inputDiv{
    width: 100%;
    border: 4px solid #aada20;
}

.addJobTitlesDiv{
    text-align: -webkit-auto
}


/* checkboxes css */

/* The container */
.contain {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline;
  color: #aada20
}

/* Hide the browser's default checkbox */
.contain input {
  /* position: absolute;
  opacity: 0;
  cursor: pointer; */
  height: 0;
  /* width: 0; */
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 2px solid #aada20
}

/* On mouse-over, add a grey background color */
.contain:hover input ~ .checkmark {
  background-color: #fff;
}

/* When the checkbox is checked, add a blue background */
.contain input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.contain input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.contain .checkmark:after {
  left: 8px;
  top: 3px;
  width: 5px;
  height: 18px;
  border: solid #aada20;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* radio button css */

/* The container */
.containR {
  display: inline;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #aada20
}

/* Hide the browser's default radio button */
.containR input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmarkR {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
  border: 3px solid #aada20;
}

/* On mouse-over, add a grey background color */
.containR:hover input ~ .checkmarkR {
  background-color: #fff;
}

/* When the radio button is checked, add a blue background */
.containR input:checked ~ .checkmarkR {
  background-color: #fff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmarkR:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.containR input:checked ~ .checkmarkR:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.containR .checkmarkR:after {
 	top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #aada20;
}

/* add button */
.AddButton{
    width: 100%;
    height: 50px;
    background: #aada20;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    border: 1px solid transparent;
}

input{
  padding-left: 1rem !important;
  color: #2a2626
}

</style>
