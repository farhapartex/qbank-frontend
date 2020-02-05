<template>
  <div class="searchBox mt-3">
    <div class="container-fluid">
      <div class="row mx-auto">
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Year --</option>
              <option v-for="year in startYear" :key="year" :value="year">{{2000 +year}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
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
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Semester --</option>
              <option value="1">First Semester</option>
              <option value="2">Secnd Semester</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Course --</option>
              <option value>Mat 120</option>
              <option value>Mat 320</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Type Course Name" />
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-3">
          <div class="form-group">
            <button class="btn btn-warning">Search Question</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "SearchBox",
  components: {}
})
export default class SearchBox extends Vue {
  @Prop() readonly departments: any;

  startYear: number = 20;
}
</script>
