<template>
  <div class="home">
    <Navigation></Navigation>
    <SearchBox></SearchBox>
    <DataTable></DataTable>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import SearchBox from "@/components/SearchBox.vue";
import DataTable from "@/components/DataTable.vue";

@Component({
  name: "Home",
  components: { Navigation, SearchBox, DataTable }
})
export default class Home extends Vue {
  // dummy
}
</script>
