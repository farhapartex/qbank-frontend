<template>
  <div class="w-100 login mt-3">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="First Name"
        v-model="registerInfo.first_name"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Last Name"
        v-model="registerInfo.last_name"
      />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Email" v-model="registerInfo.email" />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Register Number"
        v-model="registerInfo.register_number"
      />
    </div>
    <div class="form-group w-100">
      <input type="submit" class="w-100 btn btn-sm btn-primary" value="Register" @click="register" />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Register",
  components: {}
})
export default class Register extends Vue {
  registerInfo = {
    first_name: "",
    last_name: "",
    email: "",
    register_number: ""
  };

  validation() {
    if (
      this.registerInfo.first_name == "" ||
      this.registerInfo.last_name == "" ||
      this.registerInfo.email == "" ||
      this.registerInfo.register_number == ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  register() {
    if (this.validation()) {
      console.log("ok");
    } else {
      console.log("not ok");
    }
  }
}
</script>
