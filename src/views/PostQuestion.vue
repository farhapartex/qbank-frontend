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
                <select class="form-control">
                  <option value>-- Select Year --</option>
                  <option v-for="year in startYear" :key="year" :value="year">{{2000 +year}}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select class="form-control">
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
                <select class="form-control">
                  <option value>-- Select Semester --</option>
                  <option value="1">First Semester</option>
                  <option value="2">Secnd Semester</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <select class="form-control">
                  <option value>-- Select Course --</option>
                  <option value v-if="courses.length > 0">2000</option>
                  <option value v-else>No Course Found</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Type Course Title" />
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
              <div class="form-group">
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
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

@Component({
  name: "PostQuestion",
  components: { Navigation }
})
export default class PostQuestion extends Vue {
  @Getter(DEPARTMENTS) departments: any;

  startYear: number = 20;
  courses: any = [];
}
</script>
