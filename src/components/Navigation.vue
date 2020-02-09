<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{ name: 'home'}">Question Bank</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'addQuestion'}">Add Question</router-link>
          </li>
          <li class="nav-item" v-if="accessToken">
            <router-link class="nav-link" :to="{ name: 'logout'}">Logout</router-link>
          </li>
          <li class="nav-item" v-else>
            <router-link class="nav-link" :to="{ name: 'auth'}">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { ACCESS_TOKEN } from "../store/getters.names";

@Component({
  name: "Navigation",
  components: {}
})
export default class Navigation extends Vue {
  @Getter(ACCESS_TOKEN) accessToken: any;
}
</script>
