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
            <a
              href="#"
              data-toggle="modal"
              data-target="#questionImageData"
              @click="setImageData(question.image)"
            >
              <span>View</span>
              <span class="ml-2">
                <i class="fas fa-eye"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="questionImageData"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Question Image</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="w-100">
              <!-- <img class="questionDataImage" src="../assets/images/ques.jpg" alt /> -->
              <img class="questionDataImage" :src="imageFile" alt />
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>-->
        </div>
      </div>
    </div>
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
  imageFile: any = "";

  setImageData(image: any) {
    this.imageFile = image;
  }
}
</script>



<style>
.dataTable table tr {
  text-align: center;
}

.questionDataImage {
  display: block;
  width: 100%;
}
</style>
