<template>
    <div class="">
        <div class="mt-4 row">
            <input class="inputCityDiv" placeholder="  City...">
        </div>
            <br><br>
        <div class="mt-4 row">
            <div class="col-7">
                <div class="row">
                    <div class="col-7">
                        <div id="hp_imgs">
                            <img src="http://9ammusic.com/images/hp/2.jpg">
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="" style="float:left">
                            <!-- <span>{{city}}</span> -->
                            <span class="textcolorgreen">Banglore</span><br>
                            <span class="textcolorgreen">1000 react devs</span><br>
                            <span class="textcolorgreen">500 angular devs</span><br>
                            <span class="textcolorgreen">20 conferences</span><br>
                            <span class="textcolorgreen">10 meetups</span>
                        </div>
                    </div>
                </div>
                    <br><br>
                <div class="row">
                    <div class="col-5">
                        <span class="textcolorgreen">Upcoming Conferences</span>
                    </div>
                </div>
                <br>
                <div class="row upcomming conferences">
                    <!-- Upcoming Conferences -->

                    <div class="col-4 textcolorgreen"><span>ReactFoo</span></div>
                    <div class="col-5 textcolorgreen"><span>15 Sept 2019</span></div>
                    <div class="col-3"><button class="DetailButton textcolorgreen">Details</button></div>
                </div>
                    <br><br>
                <div class="row">
                    <div class="col-5">
                        <span class="textcolorgreen">Past Conferences</span>
                    </div>
                </div>
                <br>
                    <!-- Past Conferences -->
                <div class="row pastcomming conferences">
                    <div class="col-4 textcolorgreen"><span>ReactFoo</span></div>
                    <div class="col-5 textcolorgreen"><span>15 Sept 2019</span></div>
                    <div class="col-3"><button class="DetailButton textcolorgreen">Details</button></div>
                </div>
            </div>

            <div class="col-5">

            </div>
        </div>
    </div>
</template>

<style scoped>
.inputCityDiv{
    border: 4px solid #aada20;
    display: inline-block;
    margin: 0 auto;
    width: 12%;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #aada18;
}
.cityIMage{
    border: 4px solid #aada18;
    width: 24%;
    height: 100%;
    padding: 4px;
}
#hp_imgs {
	width:66%;
    float: right;
}

#hp_imgs img {
	margin:2px;
	border-radius:4px;
    border: 4px solid #aada18;
	display: block;
	max-width:100%;
	height:auto;
    padding: 3px;
    float: right;
}
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
