<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="app-body"></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./views/Layout/Footer.vue";
import Navbar from "./views/Layout/Navbar/index.vue";

export default defineComponent({
  name: "App",

  components: {
    Navbar,
    Footer
  }
});
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
