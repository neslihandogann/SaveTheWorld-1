<script setup>
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init();
});
import LandingFirst from "@/components/Home/LandingFirst.vue";
import LandingSecond from "@/components/Home/LandingSecond.vue";
import LandingThree from "@/components/Home/LandingThree.vue";
import LandingFour from "@/components/Home/LandingFour.vue";
import LandingFive from "@/components/Home/LandingFive.vue";
import { mapGetters } from "vuex";
</script>

<template>
  <Navbar />

  <div data-aos="fade-down" data-aos-duration="1000">
    <LandingFirst />
  </div>
  <div data-aos="fade-right" data-aos-duration="1000">
    <LandingSecond />
  </div>
  <div data-aos="fade-left" data-aos-duration="1000">
    <LandingThree />
  </div>
  <div data-aos="fade-right" data-aos-duration="1000">
    <LandingFour />
  </div>
  <div data-aos="fade-left" data-aos-duration="1000">
    <LandingFive />
  </div>
</template>

<style >
</style>
