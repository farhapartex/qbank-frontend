<template>
  <div class="home">
    <Navigation></Navigation>
    <SearchBox></SearchBox>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import SearchBox from "@/components/SearchBox.vue";

@Component({
  name: "Home",
  components: { Navigation, SearchBox }
})
export default class Home extends Vue {
  // dummy
}
</script>
