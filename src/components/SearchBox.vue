<template>
  <div class="searchBox mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Year --</option>
              <option value>2000</option>
              <option value>2001</option>
              <option value>2002</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Department --</option>
              <option value>Mathematics</option>
              <option value>Statistics</option>
              <option value>Physics</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
          <div class="form-group">
            <select class="form-control">
              <option value>-- Select Semester --</option>
              <option value>First Semester</option>
              <option value>Secnd Semester</option>
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
  // dummy
}
</script>
