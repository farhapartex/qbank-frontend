<template>
  <div class="searchBox mt-3">
    <div class="container-fluid">
      <div class="row mx-auto">
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <label>Select Year</label>
            <select class="form-control" v-model="searchData.year" @change="filterData">
              <option value>Get All</option>
              <option v-for="year in startYear" :key="year" :value="year+2000">{{2000 +year}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <label>Select Department</label>
            <select
              class="form-control"
              @change="getCourse($event)"
              v-model="searchData.department"
            >
              <option value>Get All</option>
              <option
                v-for="(department,index) in departments"
                :key="index"
                :value="department.id"
              >{{department.name}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <label>Select Semester</label>
            <select class="form-control" v-model="searchData.semester" @change="filterData">
              <option value="1">First Semester</option>
              <option value="2">Secnd Semester</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <label>Select Course</label>
            <select class="form-control" v-model="searchData.course" @change="filterData">
              <option
                v-for="(course, index) in courses"
                :key="index"
                :value="course.id"
              >{{course.name}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { FETCH_COURSES, FETCH_QUESTIONS } from "../store/actions.names";

@Component({
  name: "SearchBox",
  components: {}
})
export default class SearchBox extends Vue {
  @Action(FETCH_COURSES) fetchCourses: any;
  @Action(FETCH_QUESTIONS) fetchQuestions: any;
  @Prop() readonly departments: any;

  startYear: number = 20;
  courses: any = [];
  searchData: any = {
    year: "",
    department: "",
    semester: "",
    course: ""
  };

  getCourse(event: any) {
    let courseId: number = event.target.value;
    if (courseId) {
      this.fetchCourses({
        id: courseId
      })
        .then((result: any) => {
          this.courses = result;
        })
        .catch((e: any) => {
          this.courses = [];
        });
    } else {
      this.courses = [];
    }

    this.filterData();
  }

  filterData() {
    this.fetchQuestions(this.searchData)
      .then((result: any) => {
        this.$emit("inputData", result);
      })
      .catch((e: any) => {
        this.$emit("inputData", []);
      });
  }

  mounted() {
    // this.$emit("inputData", "Hello Hasan");
  }
}
</script>
