<template>
  <div class="home">
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  name: "Home",
  components: { Navigation }
})
export default class Home extends Vue {
  // dummy
}
</script>
