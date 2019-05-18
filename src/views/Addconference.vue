<template>
<!-- add conference container -->
    <div class="container addJobHeader"> 
        <div class="addJob mt-4">
            Add Conference / Meetup
        </div>
        <div class="ml-4">
          <!-- add conference container -->
          <form id="AddJobsForm" @submit.prevent="processForm">
                
            <div class="row meetings mt-4">
                  <div class="col-1 col-md-10 col-sm-1 leveldowndiv">
                    <div class="row">
                      <b-form-radio class="col-md-2 textcolorgreen" v-model="selectedmeeting" name="some-radios" value= "c">Conference</b-form-radio>
                      <b-form-radio class="col-md-10 textcolorgreen" v-model="selectedmeeting" name="some-radios" value= "m">Meetup</b-form-radio>
                    </div>
                </div>
            </div> 
                <br>
            <div class="row title mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Title</span></div>
                <div class="col-md-10 ">
                    <input class="inputDiv" v-model="title">
                </div>
            </div>
                <br>
            <div class="row description mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addCityTitles">Description</span></div>
                <div class="col-md-10 ">
                    <textarea class="inputDiv" v-model="description" cols="40" rows="5"></textarea>
                </div>
            </div>
                <br>
            <div class="row location mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addCityTitles">Location ( city )</span></div>
                <div class="col-md-10 ">
                    <input class="inputDiv" v-model="city">
                </div>
            </div>
                <br>
            <div class="row skills mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Technology</span></div>
                  <div class="col-12 col-md-10 col-sm-1">
                    <b-form-group >
                      <b-form-checkbox-group class="row skillscheckbox textcolorgreen" v-model="selectedSkils" name="flavour-1">
                        <b-form-checkbox class="col-2" value="React">React</b-form-checkbox>
                        <b-form-checkbox class="col-2" value="Angular">Angular</b-form-checkbox>
                        <b-form-checkbox class="col-2" value="Vue">Vue</b-form-checkbox>
                        <b-form-checkbox class="col-3 webcomponent" value="Web Components">Web Components</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
            </div>
                <br>
            <div class="row date mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addCityTitles">Date</span></div>
                <div class="col-md-5">
                    <div class="row">
                        <div class=col-2>
                            <span class="textcolorgreen">from</span>
                        </div>
                        <div class="col-10">
                            <datepicker v-model="fromDate" placeholder = " From" ></datepicker>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="row">
                        <div class=col-2>
                            <span class="textcolorgreen">to</span>
                        </div>
                        <div class="col-10">
                            <datepicker v-model="toDate" placeholder= " To"></datepicker>
                        </div>
                    </div>
                </div>
            </div>
                <br>
            <div class="row link mt-4">
                <div class="col-md-2 addJobTitlesDiv"><span class="addJobTitles">Link</span></div>
                    <div class="col-md-8 ">
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
import Datepicker from 'vuejs-datepicker';
import Request from "@/services/Request";
export default {
  data() {
    return {
      title: "", description: "", city: "", link: "", selectedmeeting: "", //model for input boxes
      selectedSkils: [], // Must be an array reference!
      fromDate: '', toDate: '' // calender dates
    };
  },
  components: {
    Datepicker
  },
  methods: {
    processForm(event) { // add conference request form submit 
        this.convertfromDate(this.fromDate);
        this.converttoDate(this.toDate);
        if(this.fromDate<this.toDate){
            const payload = {
                title: this.title,description: this.description, skils: this.selectedSkils, city: this.city, link: this.link,
                conferenceOrMeetup: this.selectedmeeting, fromDate: this.fromDate, toDate: this.toDate,
            };
            Request.postData("conference", payload).then((response) => {
                if( response.status === 200 ) {
                  alert("conference added successfully!");
                  event.target.reset();
                }
            }).catch((error) => {
              if( error.response.status === 500 ) {
                alert("Error adding new conference, Please fill all fields and try again.");
                event.target.reset();
              }
            });
        }else{
            alert('from date can not be greater than to date');
        }
      
    },
    convertfromDate(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth()+1)).slice(-2),
            day  = ("0" + date.getDate()).slice(-2);
        this.fromDate = [ date.getFullYear(), mnth, day ].join("-");
    },
    converttoDate(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth()+1)).slice(-2),
            day  = ("0" + date.getDate()).slice(-2);
        this.toDate = [ date.getFullYear(), mnth, day ].join("-");
    },
  },
};
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

.addJobTitles, .addCityTitles{
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

.textcolorgreen{
  color: #aada20;
}
.inputDiv{
    width: 100%;
    border: 4px solid #aada20;
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
  height: 0;
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

.skillscheckbox{
  margin-left: 3%;
}

/* media query */
@media (max-width: 767px) {
  .leveldowndiv{
    padding-left: 3rem !important;
  }
}

@media (min-width: 769px) and (max-width: 1004px) {
  .worktypdivdown{
    padding-left: 0px !important;
  }
}

@media (min-width: 996px) and (max-width: 1196px) {
  .fulltimediv{
    padding-left: 1rem !important;
  }
}

@media (min-width: 1200px) {
  .fulltimediv{
    padding-left: 0.7rem !important;
  }
}

@media (max-width: 767px) {
  .AddButton{
    margin-top: 1.5rem !important;
  }
}

@media (min-width: 991px) and (max-width: 1199px) {
  .skillscheckbox{
    margin-left: 2%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .skillscheckbox{
    margin-left: 0.5%;
  }
  .webcomponent{
    padding-right: 0px;
  }
}
</style>
