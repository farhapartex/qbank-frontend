<template>
  <div class="w-100 login mt-3">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Register Number" />
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Password" />
    </div>
    <div class="form-group w-100">
      <input type="submit" class="w-100 btn btn-sm btn-primary" value="Login" />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Login",
  components: {}
})
export default class Login extends Vue {
  // dummy
}
</script>
