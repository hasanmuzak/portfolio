<template>
<div class="container mx-auto">
  <Intro></Intro>
  <AboutMe />
  <Certificates />
  <MyProjects />
</div>
</template>

<script>
import Intro from './components/Intro.vue';
import AboutMe from './components/AboutMe.vue';
import Certificates from './components/Certificates.vue';
import MyProjects from './components/MyProjects.vue';

export default {
  components: {
    Intro,
    AboutMe,
    Certificates,
    MyProjects
  }
}
</script>

<style>
body {
  background-color: #020303;
  color: #dfe0e1;
  font-size: 14px;
  font-family: "Catamaran", sans-serif;
}
</style>
