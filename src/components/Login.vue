<template>
  <div class="w-100 login mt-3">
    <div class="alert alert-danger" role="alert" v-if="loginError==true">{{errorMessage}}</div>
    <div class="login-box w-100">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Register Number"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="user.password" />
      </div>
      <div class="form-group w-100">
        <input type="submit" class="w-100 btn btn-sm btn-primary" value="Login" @click="userLogin" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AUTHENTICATE_SINGLE_USER, LOGIN } from "../store/actions.names";

@Component({
  name: "Login",
  components: {}
})
export default class Login extends Vue {
  @Action(AUTHENTICATE_SINGLE_USER) authenticateSingleUser: any;
  @Action(LOGIN) login: any;

  user: any = {
    username: "",
    password: ""
  };

  errorMessage: string = "";
  loginError: boolean = false;

  setErrorMessege(message: string) {
    this.loginError = true;
    this.errorMessage = message;
  }

  loginValidation() {
    if (this.user == null) {
      this.setErrorMessege("User credential can't be empty");
      return false;
    } else if (this.user.username == "" || this.user.password == "") {
      this.setErrorMessege("User credential can't be empty");
      return false;
    } else {
      return true;
    }
  }
  removeErrorMessege() {
    this.loginError = false;
    this.errorMessage = "";
  }

  userLogin() {
    if (this.loginValidation()) {
      this.authenticateSingleUser(this.user.username)
        .then((result: any) => {
          if (result.length == 1 && result[0].username == this.user.username) {
            this.login(this.user)
              .then((result: any) => {
                this.removeErrorMessege();
                this.$router.push("/");
              })
              .catch((e: any) => {
                this.setErrorMessege(
                  "Login Failed! Username/Password is wrong"
                );
              });
          }
        })
        .catch((e: any) => {
          this.setErrorMessege("User Not Found");
        });
    }
  }
}
</script>
