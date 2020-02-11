<template>
  <div class="home">
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { DEPARTMENTS } from "@/store/getters.names";
import Navigation from "@/components/Navigation.vue";
import { FETCH_QUESTIONS } from "../store/actions.names";

@Component({
  name: "Profile",
  components: { Navigation }
})
export default class Profile extends Vue {}
</script>
