<template>
  <div class="home">
    <Navigation></Navigation>
    <SearchBox :departments="departments"></SearchBox>
    <DataTable></DataTable>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { DEPARTMENTS } from "@/store/getters.names";
import Navigation from "@/components/Navigation.vue";
import SearchBox from "@/components/SearchBox.vue";
import DataTable from "@/components/DataTable.vue";

@Component({
  name: "Home",
  components: { Navigation, SearchBox, DataTable }
})
export default class Home extends Vue {
  @Getter(DEPARTMENTS) departments: any;

  mounted() {
    // console.log(this.departments);
  }
}
</script>
