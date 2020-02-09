<template>
  <div class="postQuestion">
    <Navigation></Navigation>

    <div class="w-100 p-3 question-box">
      <div class="w-50 mx-auto">
        <h5 class="mt-3 mb-4 text-center">Add Question</h5>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select class="form-control" v-model="questionData.year">
                  <option value>-- Select Year --</option>
                  <option v-for="year in startYear" :key="year" :value="year">{{2000 +year}}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select
                  class="form-control"
                  @change="getCourse($event)"
                  v-model="questionData.department"
                >
                  <option value>-- Select Department --</option>
                  <option
                    v-for="(department,index) in departments"
                    :key="index"
                    :value="department.id"
                  >{{department.name}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select class="form-control" v-model="questionData.semester">
                  <option>-- Select Semester --</option>
                  <option value="1">First Semester</option>
                  <option value="2">Secnd Semester</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select
                  class="form-control"
                  v-if="courses.length > 0"
                  v-model="questionData.course"
                >
                  <option value>-- Select Course --</option>
                  <option
                    v-for="(course, index) in courses"
                    :key="index"
                    :value="course.id"
                  >{{course.name}}</option>
                </select>
                <select class="form-control" v-else>
                  <option value>-- Select Course --</option>
                  <option>No Course Found</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Course Title"
                  v-model="questionData.title"
                />
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  ref="questionImage"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6 col-lg-6 col-sm-6 mx-auto">
              <div class="form-group">
                <input type="submit" class="btn btn-sm btn-primary w-100" value="Add Question" />
              </div>
            </div>
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
import { DEPARTMENTS } from "@/store/getters.names";
import Navigation from "@/components/Navigation.vue";
import { FETCH_COURSES } from "../store/actions.names";

@Component({
  name: "PostQuestion",
  components: { Navigation }
})
export default class PostQuestion extends Vue {
  @Action(FETCH_COURSES) fetchCourses: any;
  @Getter(DEPARTMENTS) departments: any;

  startYear: number = 20;
  courses: any = [];

  questionData: any = {
    year: null,
    department: null,
    semester: null,
    course: null,
    title: ""
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
  }

  validation(formData: any) {
    if (
      formData.title == "" ||
      formData.year == null ||
      formData.department == null ||
      formData.semester == "" ||
      formData.course == null
    ) {
      return false;
    }
    return true;
  }

  submitQuesiton() {
    if (this.validation(this.questionData)) {
      let formData = new FormData();

      Object.keys(this.questionData).map(key => {
        formData.append(key, this.questionData[key]);
      });

      let cover = (this.$refs["questionImage"] as HTMLInputElement).files[0];
      if (typeof cover != "undefined") {
        formData.append("cover", cover);
      } else {
        formData.append("cover", "");
      }
    }
  }
}
</script>
