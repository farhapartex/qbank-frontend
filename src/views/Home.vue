<template>
  <div class="home">
    <Navigation></Navigation>
    <SearchBox :departments="departments" @inputData="updateMessage"></SearchBox>
    <DataTable :questions="questions"></DataTable>
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
import { FETCH_QUESTIONS } from "../store/actions.names";

@Component({
  name: "Home",
  components: { Navigation, SearchBox, DataTable }
})
export default class Home extends Vue {
  @Action(FETCH_QUESTIONS) fetchQuestions: any;
  @Getter(DEPARTMENTS) departments: any;

  questions: any = [];

  updateMessage(data: any) {
    this.questions = data;
  }

  mounted() {
    this.fetchQuestions({})
      .then((result: any) => {
        this.questions = result;
      })
      .catch((e: any) => {
        this.questions = [];
      });
  }
}
</script>
