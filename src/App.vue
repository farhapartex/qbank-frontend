<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { DEPARTMENTS, USER_PROFILE } from "./store/getters.names";
import { FETCH_DEPARTMENTS, FETCH_PROFILE } from "./store/actions.names";
@Component({
  name: "app",
  components: {}
})
export default class App extends Vue {
  @Getter(DEPARTMENTS) departments: any;
  @Getter(USER_PROFILE) profile: any;
  @Action(FETCH_PROFILE) fetchProfile: any;
  @Action(FETCH_DEPARTMENTS) fetchDepartments: any;
  mounted() {
    this.fetchDepartments();
  }
}
</script>

<style>
.w-90 {
  width: 90% !important;
}
</style>

