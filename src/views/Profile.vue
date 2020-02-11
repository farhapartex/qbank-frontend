<template>
  <div class="home">
    <Navigation></Navigation>
    <div class="w-75 mx-auto profile-box mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-5 col-xl-5 col-sm-12">
            <div class="profile-image w-100">
              <img v-if="profile.image" :src="profile.image" class="mx-auto" alt />
              <img v-else src="../assets/images/default-prof.png" class="mx-auto" alt />
            </div>
          </div>
          <div class="col-md-7 col-lg-7 col-xl-7 col-sm-12">
            <div class="w-100 mt-3">
              <h4>Name: {{profile.full_name}}</h4>
              <h5>
                <span class="mr-5">Session: {{profile.uprofile.session}}</span>
              </h5>
              <h5>
                <span>Register No: {{profile.username}}</span>
              </h5>
              <h5>
                <span class="mr-5">Department: {{profile.uprofile.department.name}}</span>
              </h5>
              <h5>
                <span class="mr-5">Email: {{profile.email}}</span>
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
import { DEPARTMENTS, USER_PROFILE } from "@/store/getters.names";
import Navigation from "@/components/Navigation.vue";
import { FETCH_QUESTIONS } from "../store/actions.names";
import { User } from "../store/store.types";

@Component({
  name: "Profile",
  components: { Navigation }
})
export default class Profile extends Vue {
  @Getter(USER_PROFILE) profile: any;

  mounted() {
    console.log(this.profile);
  }
}
</script>


<style>
.profile-image img {
  display: block;
  width: 55%;
  cursor: pointer;
}
</style>
