<template>
  <div class="logout"></div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { LOGOUT } from "../store/actions.names";
@Component({
  name: "Logout",
  components: {}
})
export default class Logout extends Vue {
  @Action(LOGOUT) logout: any;
  mounted() {
    this.logout()
      .then((data: any) => {
        this.$router.push("/auth");
      })
      .catch((e: any) => {});
  }
}
</script>