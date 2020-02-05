<template>
  <div class="auth">
    <div class="w-100">
      <div class="auth-box mx-auto p-3 mt-5">
        <div class="auth-header mt-3 mb-3">
          <h5 class="text-center">
            <span class="mr-2 login-text" @click="getLoginForm()">Login</span>
            <span class="mr-2">|</span>
            <span class="register-text" @click="getRegisterForm()">Register</span>
          </h5>
        </div>
        <Login v-if="showLogin"></Login>
        <Register v-else></Register>
        <p class="text-center">
          <router-link :to="{ name: 'home'}">Back to Home</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

@Component({
  name: "Auth",
  components: { Login, Register }
})
export default class Auth extends Vue {
  showLogin: boolean = true;

  getLoginForm() {
    this.showLogin = true;
  }

  getRegisterForm() {
    this.showLogin = false;
  }
}
</script>


<style>
.auth-box {
  max-width: 300px;
  background: #ccc;
}

.login-text,
.register-text {
  cursor: pointer;
}
</style>
