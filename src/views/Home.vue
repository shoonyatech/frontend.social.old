<template>
  <!-- show home div -->
  <div class="mt-5">
    <div class="body">
      <div class="row ml-5">
        <div class="center title">Hangout with Frontend Developers and Designers..</div>
      </div>

      <!-- show meets images div -->
      <div class="row showmeets center">
        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">**** devs</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">*** jobs</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">** conf</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">** meetups</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">** cities</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-2 align">
          <div class="row">
            <span class="margin0auto">**** courses</span>
          </div>
          <div class="row mt-2">
            <div class="imageDiv margin0auto">
              <img src alt title>
            </div>
          </div>
        </div>
      </div>

      <!-- text div -->
      <div
        class="text"
      >Meet fellow developers and designers in your city meetups, learn from courses and find jobs matching your skills</div>

      <!-- developer box div -->
      <div class="row joinSource-div">
        <div class="col-12">
          <div class="join-box">
            <div class="msg">I am a developer/designer</div>
            <a href="/signin" class="join-button">Join for Free</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center {
  text-align: center;
  width: 100%;
}

.title {
  color: #aada18;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 75px;
}

.text {
  margin: 150px 10px;
}

.imageDiv {
  background-color: rgba(204, 0, 102, 0);
  border: 3px solid #aada20;
  height: 30px;
  width: 30px;
  -webkit-border-radius: 75px;
}

.margin0auto {
  margin: 0 auto;
}

.join-box {
  border: 2px solid #aada20;
  max-width: 417px;
  height: 200px;
  margin: 0 auto;
}

.join-box .msg {
  margin-top: 20px;
}

.join-button {
  background: #aada20;
  color: #fff;
  border: none;
  padding: 8px;
  margin-bottom: 20px;
  margin-top: 30px;
}

.row {
  margin: 0;
}

@media (min-width: 700px) and (max-width: 900px) {
  .align {
    flex: 0 0 22%;
    max-width: 22%;
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .align {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (min-width: 500px) and (max-width: 600px) {
  .align {
    flex: 0 0 30%;
    max-width: 30%;
  }
}

@media (min-width: 440px) and (max-width: 500px) {
  .align {
    flex: 0 0 33%;
    max-width: 33%;
  }
}

@media (min-width: 330px) and (max-width: 440px) {
  .align {
    flex: 0 0 45%;
    max-width: 45%;
  }
}

@media (max-width: 330px) {
  .align {
    flex: 0 0 49%;
    max-width: 49%;
  }
}
</style>
