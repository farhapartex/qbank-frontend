<template>
  <div class="home"></div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  name: "Home",
  components: {}
})
export default class Home extends Vue {
  // dummy
}
</script>
