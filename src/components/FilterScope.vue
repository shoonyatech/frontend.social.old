<template>
    <div class="filterScopeDiv">
        <div class="row searchDiv">
            <input class="searchdiv" v-model="searchtext" v-on:change="onChangesSearch">
        </div>
        <div class="row skills mt-5">
            <div class="col-12 col-md-12 col-sm-1">
                 <b-form-group>
                    <b-form-checkbox-group class="skillscheckbox textcolorgreen" v-model="selectedSkils" :options="options" name="flavour-2a" stacked v-on:change="onChangesSkills">
                    </b-form-checkbox-group>
                 </b-form-group>
            </div>
        </div>

        <div class="row durationWorktype mt-5">
            <div class="col-md-12 col-5 col-md-4">
                <div class="row">
                  <b-form-checkbox class="col-md-6 custom-checkbox custom-control fulltimediv textcolorgreen" id="fulltime" v-model="fulltimestatus" name="fulltimestatus" value="true" unchecked-value="false" v-on:change="onChangesFulltime">
                    Full time
                  </b-form-checkbox>
    
                  <b-form-checkbox class="col-md-6 custom-checkbox custom-control parttimediv textcolorgreen" id="parttime" v-model="parttimestatus" name="parttimestatus" value="true" unchecked-value="false" v-on:change="onChangesParttime">
                    Part time
                  </b-form-checkbox>
                </div>
            </div>
        </div><br><br>
        <div class="row">
            <div class="col-md-12 col-5 col-md-4">
                <div class="row">
                  <b-form-checkbox class="col-md-6 textcolorgreen" id="remote" v-model="remotestatus" name="remotestatus" value="true" unchecked-value="false" v-on:change="onChangesRemote">
                    Remote
                  </b-form-checkbox>

                  <b-form-checkbox class="col-md-6 textcolorgreen" id="Contract" v-model="Contractstatus" name="Contractstatus" value="true" unchecked-value="false" v-on:change="onChangesContract">
                    Contract
                  </b-form-checkbox>
                </div>
            </div>
        </div>

        <div class="row level mt-5">
            <div class="col-1 col-sm-1 leveldowndiv">
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value=1 v-on:change="onChangeslevels">Junior</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value=2 v-on:change="onChangeslevels">Intermediate</b-form-radio>
                  <b-form-radio class="textcolorgreen" v-model="selectedlevels" name="some-radios" value=3 v-on:change="onChangeslevels">Senior</b-form-radio>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import Request from '@/services/Request'
export default {
    data() {
        return {
            searchtext: '',
            selectedSkils: [],
            options: [
                { text: 'React', value: 'React' },
                { text: 'Angular', value: 'Angular' },
                { text: 'Vue', value: 'Vue' },
                { text: 'Web Components', value: 'WebComponents' }
            ],
            fulltimestatus: false, parttimestatus: false, remotestatus: false, Contractstatus: false,
            selectedlevels: '',
            searchFilter: []
        }
    },
    mounted() {debugger
        for(let i=0; i< this.$el.getElementsByClassName('skillscheckbox')[0].children.length; i++){
            this.$el.getElementsByClassName('skillscheckbox')[0].children[i].style.display = '-webkit-box'
            this.$el.getElementsByClassName('skillscheckbox')[0].children[i].style.marginTop = '1rem'
        }
    },
    methods: {
        onChangesSearch(){debugger
            this.getFilterResults()
        },
        onChangesSkills(x){debugger
            this.selectedSkils = x
            this.getFilterResults()
        },
        onChangesFulltime(x){debugger
            this.fulltimestatus = x
            this.getFilterResults()
        },
        onChangesParttime(x){debugger
            this.parttimestatus = x
            this.getFilterResults()
        },
        onChangesRemote(x){debugger
            this.remotestatus = x
            this.getFilterResults()
        },
        onChangesContract(x){debugger
            this.Contractstatus = x
            this.getFilterResults()
        },
        onChangeslevels(x){
            this.selectedlevels = x
            this.getFilterResults()
        },

        getFilterResults(){debugger
            Request.getData('job?searchText='+this.searchtext+'&skills='+this.selectedSkils.toString()+'&isFullTime='+this.fulltimestatus+'&isPartTime='+this.parttimestatus+'&isRemote='+this.remotestatus+'&isContract='+this.Contractstatus+'&level='+this.selectedlevels+'').then((response)=>{
              if(response.status === 200){
                  this.$store.state.getAllJobs = response.data
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
    .searchdiv{
        border: 2px solid #aada20;
        width:100%
    }
    .searchDiv{
        margin:0%;
    }

    .filterScopeDiv{
        position: fixed;
    }
    .textcolorgreen{
        color: #aada20;
    }
</style>
