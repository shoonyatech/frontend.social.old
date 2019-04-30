<template>
    <div>
        <div class="row searchDiv">
            <input class="searchdiv" v-model="searchtext">
        </div>
        <div class="row skills mt-5">
            <div class="col-12 col-md-12 col-sm-1">
                 <b-form-group>
                    <b-form-checkbox-group class="skillscheckbox" v-model="selectedSkils" :options="options" name="flavour-2a" stacked>
                    </b-form-checkbox-group>
                 </b-form-group>
            </div>
        </div>

        <div class="row durationWorktype mt-5">
            <div class="col-md-12 col-5 col-md-4">
                <div class="row">
                  <b-form-checkbox class="col-md-6 custom-checkbox custom-control fulltimediv" id="fulltime" v-model="fulltimestatus" name="fulltimestatus" value="true" unchecked-value="false">
                    Full time
                  </b-form-checkbox>
    
                  <b-form-checkbox class="col-md-6 custom-checkbox custom-control" id="parttime" v-model="parttimestatus" name="parttimestatus" value="true" unchecked-value="false">
                    Part time
                  </b-form-checkbox>
                </div>
            </div>
        </div><br><br>
        <div class="row">
            <div class="col-md-12 col-5 col-md-4">
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

        <div class="row level mt-5">
            <div class="col-1 col-sm-1 leveldowndiv">
                  <b-form-radio v-model="selectedlevels" name="some-radios" value='Junior'>Junior</b-form-radio>
                  <b-form-radio v-model="selectedlevels" name="some-radios" value='Intermediate'>Intermediate</b-form-radio>
                  <b-form-radio v-model="selectedlevels" name="some-radios" value='Senior'>Senior</b-form-radio>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
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
            selectedlevels: ''
        }
    },
    mounted() {
        for(let i=0; i< this.$el.getElementsByClassName('skillscheckbox')[0].children.length; i++){
            this.$el.getElementsByClassName('skillscheckbox')[0].children[i].style.display = '-webkit-box'
            this.$el.getElementsByClassName('skillscheckbox')[0].children[i].style.marginTop = '1rem'
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
</style>
