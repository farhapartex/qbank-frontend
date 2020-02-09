<template>
  <div class="dataTable mx-auto w-90 mt-5">
    <div
      class="alert alert-secondary text-center"
      v-if="questions.length==0"
      role="alert"
    >Data Not Found</div>
    <table class="table table-bordered" v-else>
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Department</th>
          <th scope="col">Year/Semester</th>
          <th scope="col">Course Code</th>
          <th scope="col">Course Title</th>
          <th scope="col">File</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in questions" :key="index">
          <td>{{question.year}}</td>
          <td>{{question.department.name}}</td>
          <td v-if="question.semester==1">First Semester</td>
          <td v-else>Second Semester</td>
          <td>{{question.course.code}}</td>
          <td>{{question.course.name}}</td>
          <td>
            <a href="#">
              <span>View</span>
              <span class="ml-2">
                <i class="fas fa-eye"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "DataTable",
  components: {}
})
export default class DataTable extends Vue {
  @Prop() readonly questions: any;
}
</script>



<style>
.dataTable table tr {
  text-align: center;
}
</style>
