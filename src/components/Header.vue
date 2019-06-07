<template>
  <div>
    <div class="header1">
      <b-navbar toggleable="lg">
        <b-navbar-brand class="logo1">
          <router-link to="/" class="menu-item">
            <span class="frontend1">frontend</span>
            <span class="social1">social</span>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="menu-item1">
              <router-link to="/learn" class="textColor">Learn</router-link>
            </b-nav-item>
            <b-nav-item class="menu-item1">
              <router-link to="/jobs" class="textColor">Jobs</router-link>
            </b-nav-item>
            <b-nav-item class="menu-item1">
              <router-link to="/interview" class="textColor">Interview Help</router-link>
            </b-nav-item>
            <b-nav-item class="menu-item1">
              <router-link to="/code-challenge" class="textColor">Code Challenge</router-link>
            </b-nav-item>
            <b-nav-item class="menu-item1">
              <router-link to="/conferences" class="textColor">Conferences</router-link>
            </b-nav-item>
            <b-nav-item class="menu-item1">
              <router-link to="/city" class="textColor">City</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div v-if="isSignedIn">
              <el-dropdown class="user-image">
                <div>
                  <img class="user-image-photo" v-bind:src="getuserDetails.profilePic">
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                       <router-link to="/profile" class="menu-item">
                          <span>Profile</span>
                       </router-link>
                    </el-dropdown-item>
                  <el-dropdown-item>
                    <span v-on:click="logOut()">Logout</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="signin-btn" v-else>
              <router-link to="/signin" class="menu-item">
                <el-button class="signin" type="primary">Sign in</el-button>
              </router-link>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      i: 0,
    };
  },
    computed: {
    ...mapState([ // getting data from store
      "getuserDetails", "isSignedIn",
    ]),
  },
  created() {
    this.CreateUser();
    if (localStorage.authToken) {
      this.$store.state.isSignedIn = true;
    }
  },
    methods: {
      CreateUser() {
        this.facebookResponse();
        const vim = this;
        setTimeout(() => {
          if (localStorage.authToken) {
            vim.getuserdetails();
            if (vim.i === 0 && vim.$route.path === "/") {
              vim.$router.push("/");
              vim.i++;
            }
          }
        }, 2000);
      },
      getuserdetails() {
        this.$store.dispatch("GETUSERDETAILS", localStorage.getItem("authToken"));
      },
      facebookResponse() {
        const accessToken = this.$route.hash
          .split("&")
          .find((p) => p.indexOf("access_token") > -1);
        if (accessToken) {
          this.$store.dispatch("FBRESPONSE", accessToken);
        }
      },
      logOut() {
        localStorage.removeItem("authToken");
        this.$router.push( "/" );
        this.$store.state.isSignedIn = false;
      },
    },
};
</script>


<style scoped lang="scss">
.header1 {
  border-bottom: 7px solid #aada18;
}

.logo1 {
  text-align: left;
  height: 68px;
  width: 250px;
}

.navbar-toggler {
  padding: 8px;
  font-size: 0.25rem;
  line-height: 1;
  background-color: transparent;
  border: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 5.5em;
  height: 5.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

.frontend1 {
  font-weight: bold;
  font-size: 1.4rem;
  margin: 10px 10px;
  color: #aada18 !important;
}

.social1 {
  color: #aada18 !important;
}

.menu-item1 {
  color: #aada18 !important;
  font-size: 1.1rem;
  margin: 0px 15px;
  cursor: pointer;
  text-decoration: none;
}

.textColor {
  color: #aada18 !important;
}

.signin-btn {
  margin-right: 2rem;
}

button.signin {
  padding: 13px 30px;
}

.user-image {
  // position: fixed;
  // right: 25px;
  // top: 11px;
  height: 50px;
  width: 50px;
  border: 2px solid #aada18;
  display: inline-block;
  border-radius: 999px;
  cursor: pointer;
}

.user-image-photo {
  border-radius: 50%;
  height: 47px;
  width: 47px;
  // background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzAiIHN0eWxlPSJmaWxsOiNBQURBMTgiIGQ9Ik01MTIsMjU2YzAsMTQxLjQtMTE0LjYsMjU2LTI1NiwyNTZTMCwzOTcuNCwwLDI1NlMxMTQuNiwwLDI1NiwwICBTNTEyLDExNC42LDUxMiwyNTYiIGRhdGEtb3JpZ2luYWw9IiNGRkNDNEQiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjYWFkYTE4Ij48L3BhdGg+PGc+Cgk8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzEiIHN0eWxlPSJmaWxsOiM2NjQ1MDA7IiBkPSJNMzg4LjgsMzM2LjFjLTIuNS0yLjMtNi4zLTIuNC05LTAuNGMtMC42LDAuNC01NS44LDQxLjItMTIzLjcsNDEuMiAgIGMtNjcuOCwwLTEyMy4yLTQwLjgtMTIzLjctNDEuMmMtMi43LTItNi41LTEuOC05LDAuNGMtMi41LDIuMy0zLjEsNi0xLjMsOC45YzEuOCwzLjEsNDUuOCw3NC42LDEzNC4xLDc0LjZTMzg4LjMsMzQ4LDM5MC4xLDM0NSAgIEMzOTEuOSwzNDIuMSwzOTEuMywzMzguMywzODguOCwzMzYuMSIgZGF0YS1vcmlnaW5hbD0iIzY2NDUwMCI+PC9wYXRoPgo8L2c+PGc+Cgk8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzBfMV8iIHN0eWxlPSJmaWxsOiNBQURBMTgiIGQ9Ik01MTIsMjU2YzAsMTQxLjQtMTE0LjYsMjU2LTI1NiwyNTZTMCwzOTcuNCwwLDI1NlMxMTQuNiwwLDI1NiwwICAgUzUxMiwxMTQuNiw1MTIsMjU2IiBkYXRhLW9yaWdpbmFsPSIjRkZDQzREIiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iI2FhZGExOCI+PC9wYXRoPgo8L2c+PGc+Cgk8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzFfMV8iIHN0eWxlPSJmaWxsOiM2NjQ1MDA7IiBkPSJNMzg4LjgsMzM2LjFjLTIuNS0yLjMtNi4zLTIuNC05LTAuNGMtMC42LDAuNC01NS44LDQxLjItMTIzLjcsNDEuMiAgIGMtNjcuOCwwLTEyMy4yLTQwLjgtMTIzLjctNDEuMmMtMi43LTItNi41LTEuOC05LDAuNGMtMi41LDIuMy0zLjEsNi0xLjMsOC45YzEuOCwzLjEsNDUuOCw3NC42LDEzNC4xLDc0LjZTMzg4LjMsMzQ4LDM5MC4xLDM0NSAgIEMzOTEuOSwzNDIuMSwzOTEuMywzMzguMywzODguOCwzMzYuMSIgZGF0YS1vcmlnaW5hbD0iIzY2NDUwMCI+PC9wYXRoPgo8L2c+PGc+Cgk8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzFfMl8iIHN0eWxlPSJmaWxsOiM2NjQ1MDA7IiBkPSJNMzg4LjgsMzM2LjFjLTIuNS0yLjMtNi4zLTIuNC05LTAuNGMtMC42LDAuNC01NS44LDQxLjItMTIzLjcsNDEuMiAgIGMtNjcuOCwwLTEyMy4yLTQwLjgtMTIzLjctNDEuMmMtMi43LTItNi41LTEuOC05LDAuNGMtMi41LDIuMy0zLjEsNi0xLjMsOC45YzEuOCwzLjEsNDUuOCw3NC42LDEzNC4xLDc0LjZTMzg4LjMsMzQ4LDM5MC4xLDM0NSAgIEMzOTEuOSwzNDIuMSwzOTEuMywzMzguMywzODguOCwzMzYuMSIgZGF0YS1vcmlnaW5hbD0iIzY2NDUwMCI+PC9wYXRoPgo8L2c+PHBhdGggc3R5bGU9ImZpbGw6IzY1NDcxQjsiIGQ9Ik0yNTYsMzc4LjJjLTIuMSwwLTQuMS0wLjItNi4yLTAuMnY2NC4yaDEyLjRWMzc4QzI2MC4xLDM3OCwyNTguMSwzNzguMiwyNTYsMzc4LjIiIGRhdGEtb3JpZ2luYWw9IiM2NTQ3MUIiIGNsYXNzPSIiPjwvcGF0aD48Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzEyLjksMzY5LjhjMC4yLTAuMS0yMC42LDUuNC0zNC44LDYuOWMtNS4yLDAuNi0xMC41LDEuMS0xNS45LDEuM3Y2NC4yaDIyLjIgICBjMTUuNiwwLDI4LjQtMTIuOCwyOC40LTI4LjR2LTE3LjlsMCwwTDMxMi45LDM2OS44eiIgZGF0YS1vcmlnaW5hbD0iI0ZGRkZGRiIgY2xhc3M9IiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xOTkuMSwzNjkuOGMtMC4yLTAuMSwyMC42LDUuNCwzNC44LDYuOWM1LjIsMC42LDEwLjUsMS4xLDE1LjksMS4zdjY0LjJoLTIyLjIgICBjLTE1LjYsMC0yOC40LTEyLjgtMjguNC0yOC40di0xNy45bDAsMEwxOTkuMSwzNjkuOHoiIGRhdGEtb3JpZ2luYWw9IiNGRkZGRkYiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzY1NDcxQjsiIGQ9Ik0zODguOCwzMzYuMWMtMi41LTIuMy02LjMtMi40LTktMC40Yy0wLjQsMC4zLTMyLjEsMjMuNy03NywzNS4xYy02LjMsMS42LTI2LjUsNi4xLTQ2LjcsNi4xICAgYy0yMC4zLDAtNDAuNS00LjUtNDYuOC02LjFjLTQ0LjgtMTEuNC03Ni41LTM0LjgtNzctMzUuMWMtMi43LTItNi41LTEuOS05LDAuNHMtMy4xLDYtMS4zLDguOWMxLjQsMi4zLDI2LjgsNDMuNiw3Ny4yLDYzLjd2LTI2ICAgYy0wLjItMC4xLDIwLjYsNS40LDM0LjgsNi45YzUuMiwwLjYsMTAuNSwxLjEsMTUuOSwxLjNsMCwwYzIuMSwwLjEsNC4xLDAuMiw2LjIsMC4yYzIuMSwwLDQuMS0wLjIsNi4yLTAuMmwwLDAgICBjNS40LTAuMiwxMC43LTAuNywxNS45LTEuM2MxNC4yLTEuNSwzNS03LDM0LjgtNi45djI2YzUwLjQtMjAuMSw3NS44LTYxLjQsNzcuMi02My43QzM5MS45LDM0Mi4xLDM5MS4zLDMzOC4zLDM4OC44LDMzNi4xIiBkYXRhLW9yaWdpbmFsPSIjNjU0NzFCIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNjU0NzFCOyIgZD0iTTM3OC43LDE5OS41YzAsMjQuNC0xMy4zLDQ0LjEtMjkuOCw0NC4xcy0yOS44LTE5LjgtMjkuOC00NC4xczEzLjMtNDQuMSwyOS44LTQ0LjEgICBDMzY1LjMsMTU1LjMsMzc4LjcsMTc1LjEsMzc4LjcsMTk5LjUiIGRhdGEtb3JpZ2luYWw9IiM2NTQ3MUIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPjxwYXRoIHN0eWxlPSJmaWxsOiMzNDQ0MEEiIGQ9Ik00MzkuMywxODUuMmMtMS43LDEzLjYtNi4yLDUwLTE4LDU4LjhjLTkuNCw3LTMzLjYsMTItNTEsMTJsMCwwYy0xNS43LDAtMzAuOC00LTQyLjMtMTAuNiAgYy0xOC44LTEwLjctMjEuNi00MC43LTIyLjctNTYuNGMtMC42LTguNi0yLjUtMjYuMywxMS44LTM1LjFjMTYuMS05LjksNDkuMi0xMC42LDU5LjEtMTAuNmMyMS41LDAsNDIuNiwzLjksNTcuNiw5LjEgIEM0NDMuMywxNTUuNiw0NDAuNCwxNzYuNiw0MzkuMywxODUuMiBNMjA3LjksMTg4LjhjLTEuMSwxNS43LTMuOSw0NS45LTIyLjcsNTYuNmMtMTEuNiw2LjYtMjYuNiwxMC42LTQyLjQsMTAuNmwwLDAgIGMtMTcuNCwwLTQxLjYtNC45LTUxLTEyYy0xMS44LTguOC0xNi4zLTQ1LTE4LTU4LjZjLTEuMS04LjYtNC0yOS43LDUuNS0zM2MxNS4xLTUuMSwzNi4xLTkuMSw1Ny42LTkuMWM5LjksMCw0MywwLjYsNTkuMSwxMC41ICBDMjEwLjMsMTYyLjYsMjA4LjQsMTgwLjIsMjA3LjksMTg4LjggTTQ5NS4xLDEzNi45Yy0yLjQtMi40LTE4LDMuOS0zMy44LTQuMWMtMzIuNS0xNi42LTExNC44LTMyLjYtMTY4LjMsNS4zICBjLTUuNyw0LjEtMjkuNyw0LjgtMzYuNCw0LjVjLTYuNywwLjMtMzAuNi0wLjQtMzYuNC00LjVjLTUzLjUtMzcuOS0xMzUuOC0yMS45LTE2OC4zLTUuM2MtMTUuOCw4LTMxLjQsMS44LTMzLjgsNC4xICBjLTMuNSwzLjQtMy41LDE3LDAsMjAuNHMyMSw3LjMsMjQuNSwxNy41czMuNSw3MC41LDMxLjUsOTEuM2MyNi4xLDE5LjUsODcuMiwyNS40LDEyNS44LDMuNGMzMy43LTE5LjIsMzIuNi01OS42LDM4LjctODMuNiAgYzIuMi04LjYsOC40LTEyLjksMTcuOS0xMi45czE1LjcsNC4zLDE3LjksMTIuOWM2LjIsMjQsNSw2NC40LDM4LjcsODMuNmMzOC43LDIyLDk5LjcsMTYuMSwxMjUuOC0zLjRjMjcuOS0yMC44LDI4LTgxLjEsMzEuNS05MS4zICBjMy41LTEwLjIsMjEtMTQuMSwyNC41LTE3LjVDNDk4LjYsMTUzLjksNDk4LjYsMTQwLjMsNDk1LjEsMTM2LjkiIGRhdGEtb3JpZ2luYWw9IiMyOTJGMzMiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMzMzQzMEEiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojNjU0NzFCOyIgZD0iTTEzNC41LDE5OS41YzAsMjQuNCwxMy4zLDQ0LjEsMjkuOCw0NC4xczI5LjgtMTkuOCwyOS44LTQ0LjFzLTEzLjMtNDQuMS0yOS44LTQ0LjEgIEMxNDcuOCwxNTUuMywxMzQuNSwxNzUuMSwxMzQuNSwxOTkuNSIgZGF0YS1vcmlnaW5hbD0iIzY1NDcxQiIgY2xhc3M9IiI+PC9wYXRoPjwvZz4gPC9zdmc+);
  //   background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzAiIHN0eWxlPSJmaWxsOiNGRkNDNEQ7IiBkPSJNNTEyLDI1NmMwLDE0MS40LTExNC42LDI1Ni0yNTYsMjU2UzAsMzk3LjQsMCwyNTZTMTE0LjYsMCwyNTYsMCAgUzUxMiwxMTQuNiw1MTIsMjU2Ii8+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xIiBzdHlsZT0iZmlsbDojNjY0NTAwOyIgZD0iTTM4OC44LDMzNi4xYy0yLjUtMi4zLTYuMy0yLjQtOS0wLjRjLTAuNiwwLjQtNTUuOCw0MS4yLTEyMy43LDQxLjIgICBjLTY3LjgsMC0xMjMuMi00MC44LTEyMy43LTQxLjJjLTIuNy0yLTYuNS0xLjgtOSwwLjRjLTIuNSwyLjMtMy4xLDYtMS4zLDguOWMxLjgsMy4xLDQ1LjgsNzQuNiwxMzQuMSw3NC42UzM4OC4zLDM0OCwzOTAuMSwzNDUgICBDMzkxLjksMzQyLjEsMzkxLjMsMzM4LjMsMzg4LjgsMzM2LjEiLz4KPC9nPgo8Zz4KCTxwYXRoIGlkPSJTVkdDbGVhbmVySWRfMF8xXyIgc3R5bGU9ImZpbGw6I0ZGQ0M0RDsiIGQ9Ik01MTIsMjU2YzAsMTQxLjQtMTE0LjYsMjU2LTI1NiwyNTZTMCwzOTcuNCwwLDI1NlMxMTQuNiwwLDI1NiwwICAgUzUxMiwxMTQuNiw1MTIsMjU2Ii8+CjwvZz4KPGc+Cgk8cGF0aCBpZD0iU1ZHQ2xlYW5lcklkXzFfMV8iIHN0eWxlPSJmaWxsOiM2NjQ1MDA7IiBkPSJNMzg4LjgsMzM2LjFjLTIuNS0yLjMtNi4zLTIuNC05LTAuNGMtMC42LDAuNC01NS44LDQxLjItMTIzLjcsNDEuMiAgIGMtNjcuOCwwLTEyMy4yLTQwLjgtMTIzLjctNDEuMmMtMi43LTItNi41LTEuOC05LDAuNGMtMi41LDIuMy0zLjEsNi0xLjMsOC45YzEuOCwzLjEsNDUuOCw3NC42LDEzNC4xLDc0LjZTMzg4LjMsMzQ4LDM5MC4xLDM0NSAgIEMzOTEuOSwzNDIuMSwzOTEuMywzMzguMywzODguOCwzMzYuMSIvPgo8L2c+CjxnPgoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8xXzJfIiBzdHlsZT0iZmlsbDojNjY0NTAwOyIgZD0iTTM4OC44LDMzNi4xYy0yLjUtMi4zLTYuMy0yLjQtOS0wLjRjLTAuNiwwLjQtNTUuOCw0MS4yLTEyMy43LDQxLjIgICBjLTY3LjgsMC0xMjMuMi00MC44LTEyMy43LTQxLjJjLTIuNy0yLTYuNS0xLjgtOSwwLjRjLTIuNSwyLjMtMy4xLDYtMS4zLDguOWMxLjgsMy4xLDQ1LjgsNzQuNiwxMzQuMSw3NC42UzM4OC4zLDM0OCwzOTAuMSwzNDUgICBDMzkxLjksMzQyLjEsMzkxLjMsMzM4LjMsMzg4LjgsMzM2LjEiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojNjU0NzFCOyIgZD0iTTI1NiwzNzguMmMtMi4xLDAtNC4xLTAuMi02LjItMC4ydjY0LjJoMTIuNFYzNzhDMjYwLjEsMzc4LDI1OC4xLDM3OC4yLDI1NiwzNzguMiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzEyLjksMzY5LjhjMC4yLTAuMS0yMC42LDUuNC0zNC44LDYuOWMtNS4yLDAuNi0xMC41LDEuMS0xNS45LDEuM3Y2NC4yaDIyLjIgICBjMTUuNiwwLDI4LjQtMTIuOCwyOC40LTI4LjR2LTE3LjlsMCwwTDMxMi45LDM2OS44eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xOTkuMSwzNjkuOGMtMC4yLTAuMSwyMC42LDUuNCwzNC44LDYuOWM1LjIsMC42LDEwLjUsMS4xLDE1LjksMS4zdjY0LjJoLTIyLjIgICBjLTE1LjYsMC0yOC40LTEyLjgtMjguNC0yOC40di0xNy45bDAsMEwxOTkuMSwzNjkuOHoiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2NTQ3MUI7IiBkPSJNMzg4LjgsMzM2LjFjLTIuNS0yLjMtNi4zLTIuNC05LTAuNGMtMC40LDAuMy0zMi4xLDIzLjctNzcsMzUuMWMtNi4zLDEuNi0yNi41LDYuMS00Ni43LDYuMSAgIGMtMjAuMywwLTQwLjUtNC41LTQ2LjgtNi4xYy00NC44LTExLjQtNzYuNS0zNC44LTc3LTM1LjFjLTIuNy0yLTYuNS0xLjktOSwwLjRzLTMuMSw2LTEuMyw4LjljMS40LDIuMywyNi44LDQzLjYsNzcuMiw2My43di0yNiAgIGMtMC4yLTAuMSwyMC42LDUuNCwzNC44LDYuOWM1LjIsMC42LDEwLjUsMS4xLDE1LjksMS4zbDAsMGMyLjEsMC4xLDQuMSwwLjIsNi4yLDAuMmMyLjEsMCw0LjEtMC4yLDYuMi0wLjJsMCwwICAgYzUuNC0wLjIsMTAuNy0wLjcsMTUuOS0xLjNjMTQuMi0xLjUsMzUtNywzNC44LTYuOXYyNmM1MC40LTIwLjEsNzUuOC02MS40LDc3LjItNjMuN0MzOTEuOSwzNDIuMSwzOTEuMywzMzguMywzODguOCwzMzYuMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzY1NDcxQjsiIGQ9Ik0zNzguNywxOTkuNWMwLDI0LjQtMTMuMyw0NC4xLTI5LjgsNDQuMXMtMjkuOC0xOS44LTI5LjgtNDQuMXMxMy4zLTQ0LjEsMjkuOC00NC4xICAgQzM2NS4zLDE1NS4zLDM3OC43LDE3NS4xLDM3OC43LDE5OS41Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzI5MkYzMzsiIGQ9Ik00MzkuMywxODUuMmMtMS43LDEzLjYtNi4yLDUwLTE4LDU4LjhjLTkuNCw3LTMzLjYsMTItNTEsMTJsMCwwYy0xNS43LDAtMzAuOC00LTQyLjMtMTAuNiAgYy0xOC44LTEwLjctMjEuNi00MC43LTIyLjctNTYuNGMtMC42LTguNi0yLjUtMjYuMywxMS44LTM1LjFjMTYuMS05LjksNDkuMi0xMC42LDU5LjEtMTAuNmMyMS41LDAsNDIuNiwzLjksNTcuNiw5LjEgIEM0NDMuMywxNTUuNiw0NDAuNCwxNzYuNiw0MzkuMywxODUuMiBNMjA3LjksMTg4LjhjLTEuMSwxNS43LTMuOSw0NS45LTIyLjcsNTYuNmMtMTEuNiw2LjYtMjYuNiwxMC42LTQyLjQsMTAuNmwwLDAgIGMtMTcuNCwwLTQxLjYtNC45LTUxLTEyYy0xMS44LTguOC0xNi4zLTQ1LTE4LTU4LjZjLTEuMS04LjYtNC0yOS43LDUuNS0zM2MxNS4xLTUuMSwzNi4xLTkuMSw1Ny42LTkuMWM5LjksMCw0MywwLjYsNTkuMSwxMC41ICBDMjEwLjMsMTYyLjYsMjA4LjQsMTgwLjIsMjA3LjksMTg4LjggTTQ5NS4xLDEzNi45Yy0yLjQtMi40LTE4LDMuOS0zMy44LTQuMWMtMzIuNS0xNi42LTExNC44LTMyLjYtMTY4LjMsNS4zICBjLTUuNyw0LjEtMjkuNyw0LjgtMzYuNCw0LjVjLTYuNywwLjMtMzAuNi0wLjQtMzYuNC00LjVjLTUzLjUtMzcuOS0xMzUuOC0yMS45LTE2OC4zLTUuM2MtMTUuOCw4LTMxLjQsMS44LTMzLjgsNC4xICBjLTMuNSwzLjQtMy41LDE3LDAsMjAuNHMyMSw3LjMsMjQuNSwxNy41czMuNSw3MC41LDMxLjUsOTEuM2MyNi4xLDE5LjUsODcuMiwyNS40LDEyNS44LDMuNGMzMy43LTE5LjIsMzIuNi01OS42LDM4LjctODMuNiAgYzIuMi04LjYsOC40LTEyLjksMTcuOS0xMi45czE1LjcsNC4zLDE3LjksMTIuOWM2LjIsMjQsNSw2NC40LDM4LjcsODMuNmMzOC43LDIyLDk5LjcsMTYuMSwxMjUuOC0zLjRjMjcuOS0yMC44LDI4LTgxLjEsMzEuNS05MS4zICBjMy41LTEwLjIsMjEtMTQuMSwyNC41LTE3LjVDNDk4LjYsMTUzLjksNDk4LjYsMTQwLjMsNDk1LjEsMTM2LjkiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzY1NDcxQjsiIGQ9Ik0xMzQuNSwxOTkuNWMwLDI0LjQsMTMuMyw0NC4xLDI5LjgsNDQuMXMyOS44LTE5LjgsMjkuOC00NC4xcy0xMy4zLTQ0LjEtMjkuOC00NC4xICBDMTQ3LjgsMTU1LjMsMTM0LjUsMTc1LjEsMTM0LjUsMTk5LjUiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
  max-width: 50px;
  max-height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  opacity: 0.7;
}

@media (min-width: 1063px) and (max-width: 1102px) {
  .menu-item1 {
    font-size: 15px !important;
  }
  .navbar-collapse {
    margin-left: 100px;
  }
}

@media (min-width: 992px) and (max-width: 1063px) {
  .menu-item1 {
    font-size: 14px !important;
  }

  .navbar-collapse {
    margin-left: 100px;
  }
}

@media (min-width: 1101px) and (max-width: 1109px) {
  .menu-item1 {
    font-size: 16px !important;
  }
}

@media (min-width: 1110px) and (max-width: 1300px) {
  .menu-item1 {
    font-size: 17px !important;
  }
}
</style>
