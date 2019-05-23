<template>
<!-- show home div -->
    <div class="showHomw ml-5 mt-5">
      <div class="body">
        <div class="row">
            <span class="textcolorgreen">Explore here to know about . .</span>
        </div>
            <br><br>
<!-- show meets images div -->
        <div class="row showmeets">
            <div class="col-md-2 col-sm-2 col-xs-2">
                <div class="row">
                    <span class="textcolorgreen margin0auto">1000 devs</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <div class="row">
                    <span class="textcolorgreen margin0auto">500 recruiters</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <div class="row">
                    <span class="textcolorgreen margin0auto">20 conf</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <div class="row">
                    <span class="textcolorgreen margin0auto">50 meetups</span>
                </div>
                <div class="row mt-2">
                    <div class="imageDiv margin0auto">
                        <img src="" alt="" title="">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
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
        <div class="row text">
            <div class="col-8">
                <span class="textcolorgreen">blah blah blah blah blah blah blah blah blah blah blah blah
                     blah blah blah blah blah blah blah blah blah blah blah blah . . .</span>
            </div>
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
      </div><br><br><br><br><br>
<!-- footer section -->
      <div class=footer>
          <div class="row">
              <div class="col-3 mt-2">
                  <span class="textcolorgreenfontback">About Us</span><br>
                  <span class="textcolorgreenfontback">Contact Us</span>
              </div>
              <div class="col-8">
                  <div class="row mt-3" style="float: right">
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                    <div class="socialLink col-md-2 col-sm-2 col-xs-2">
                        <span class="socialLinkSpan">f</span>
                    </div>
                  </div>
              </div>
          </div>
      </div>
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
.footer{
    display: block;
    width: 100%;
    border-top: 2px solid #aada18;
}
.socialLink{
    background-color: #aada20;
    border: 3px solid white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.socialLinkSpan{
    color: #fff;
    font-size: 23px;
    font-weight: bolder;
}
.row{
    margin:0;
}
</style>

