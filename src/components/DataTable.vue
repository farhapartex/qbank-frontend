<template>
  <div class="dataTable mx-auto w-90 mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Year/Semester</th>
          <th scope="col">Course Code</th>
          <th scope="col">Course Title</th>
          <th scope="col">File</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MAT</td>
          <td>2/1</td>
          <td>MAT-213</td>
          <td>Latice Theory</td>
          <td>
            <a href="#">
              <span>View</span>
              <span class="ml-2">
                <i class="fas fa-eye"></i>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td>MAT</td>
          <td>2/1</td>
          <td>MAT-213</td>
          <td>Latice Theory</td>
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
  // dummy
}
</script>



<style>
.dataTable table tr {
  text-align: center;
}
</style>
