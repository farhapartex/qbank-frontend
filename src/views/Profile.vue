<template>
  <div class="home">
    <Navigation></Navigation>
    <div class="w-75 mx-auto profile-box mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-5 col-xl-5 col-sm-12">
            <div class="profile-image w-100">
              <img src="../assets/images/default-prof.png" class="mx-auto" alt />
            </div>
          </div>
          <div class="col-md-7 col-lg-7 col-xl-7 col-sm-12">
            <div class="w-100 mt-3">
              <h4>Md Nazmul Hasan</h4>
              <h5>
                <span class="mr-5">Session: 2012-13</span>
              </h5>
              <h5>
                <span>Register No: 2012133008</span>
              </h5>
              <h5>
                <span class="mr-5">Department: MAT</span>
              </h5>
              <h5>
                <span class="mr-5">Email: hasan08sust@gmail.com</span>
              </h5>
              <h6 class="mt-4">
                <a href="#">Edit Profile</a>
              </h6>
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
import { FETCH_QUESTIONS } from "../store/actions.names";

@Component({
  name: "Profile",
  components: { Navigation }
})
export default class Profile extends Vue {}
</script>


<style>
.profile-image img {
  display: block;
  width: 55%;
  cursor: pointer;
}
</style>
