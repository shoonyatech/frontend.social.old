<template>
<!-- show home div -->
    <div class="showHomw mt-5">
      <div class="body">
        <div class="row ml-5">
            <span class="textcolorgreen">Explore here to know about . .</span>
        </div>
            <br><br>
<!-- show meets images div -->
        <div class="row showmeets">
            <div class="col-md-2 col-2 align">
                <div class="row">
                    <span class="textcolorgreen margin0auto">1000 devs</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-2 align">
                <div class="row">
                    <span class="textcolorgreen margin0auto">500 recruiters</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-2 align">
                <div class="row">
                    <span class="textcolorgreen margin0auto">20 conf</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-2 align">
                <div class="row">
                    <span class="textcolorgreen margin0auto">50 meetups</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-2 align">
                <div class="row">
                    <span class="textcolorgreen margin0auto">20 cities</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
        </div><br><br><br>
<!-- text div -->
        <div class="text">
                <span class="textcolorgreen">blah blah blah blah blah blah blah blah blah blah blah blah
                     blah blah blah blah blah blah blah blah blah blah blah blah . . .</span>
        </div><br><br><br><br><br>
<!-- developer box div -->
        <div class="row joinSource-div">
            <div class="col-6">
                <div class="developer-div">
                    <div class="background">
                        <div class="transbox">
                            <span class="textcolorgreen">I am a developer/ designer .</span>
                        </div>
                        <button class="textcolorgreen-button">Join for Free</button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="recruiter-div">
                    <div class="background">
                        <div class="transbox">
                            <span class="textcolorgreen">I am a developer/ designer .</span>
                        </div>
                        <button class="textcolorgreen-button">Join as recruiter</button>
                    </div>
                </div>
            </div>
        </div>
      </div><br><br><br><br>
    </div>
</template>

<style scoped>
/* style for show home div */
.textcolorgreen{
  color: #aada20;
  font-size: 21px;
}
.textcolorgreenfontback{
    color: #aada20;
}
.imageDiv{
    background-color: rgba(204, 0, 102, 0);
    border: 3px solid #aada20;
    height: 30px;
    width: 30px;
    -webkit-border-radius: 75px;
}
.margin0auto{
    margin: 0 auto;
}
div.background {
  border: 2px solid #aada20;
}

div.transbox {
  margin: 10px;
}
div.transbox p {
  font-weight: bold;
  color: #000000;
}
.textcolorgreen-button{
    background: #aada20;
    color: #fff;
    border: none;
    padding: 8px;
    margin-bottom: 20px;
}
.row{
    margin:0;
}

@media (min-width: 700px) and (max-width: 900px) {
  .align{
    flex: 0 0 22%;
    max-width: 22%;
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .align{
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (min-width: 500px) and (max-width: 600px) {
  .align{
    flex: 0 0 30%;
    max-width: 30%;
  }
}

@media (min-width: 440px) and (max-width: 500px) {
  .align{
    flex: 0 0 33%;
    max-width: 33%;
  }
}

@media (min-width: 330px) and (max-width: 440px) {
  .align{
    flex: 0 0 45%;
    max-width: 45%;
  }
}

@media (max-width: 330px) {
  .align{
    flex: 0 0 49%;
    max-width: 49%;
  }
}
</style>

