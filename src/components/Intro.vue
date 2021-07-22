<template>
  <div class="intro-section border-b text-center">
    <h1 data-aos="fade-in" data-aos-duration="1000" class="welcome-title">
      I'm Hasan Muzak
    </h1>

    <div class="flex justify-center mt-8 fullstack-developer">
      <vue-typed-js
        :loop="true"
        :backDelay="2000"
        :typeSpeed="50"
        :strings="['Fullstack Developer', 'From Bursa, Turkey']"
      >
        <h1 class="typing"></h1>
      </vue-typed-js>
    </div>
    <div class="flex tags mt-10 items-center sm:justify-center justify-evenly">
      <div
        data-aos="fade-out"
        data-aos-duration="1000"
        class="flex skill-container px-4 py-2 sm:mr-6 rounded items-center"
      >
        <i class="bx bx-sm mr-1 bxl-python"></i> <span>Python</span>
      </div>
      <div
        data-aos="fade-out"
        data-aos-duration="250"
        class="flex skill-container sm:mr-6 px-4 py-2 rounded items-center"
      >
        <i class="bx bx-sm mr-1 bxl-vuejs"></i> <span>Vue.JS</span>
      </div>
      <div
        data-aos="fade-out"
        data-aos-duration="700"
        class="flex skill-container sm:mr-6 px-4 py-2 rounded items-center"
      >
        <i class="bx bx-sm mr-1 bxl-nodejs"></i> <span>Node.JS</span>
      </div>
    </div>
    <div class="flex justify-center pt-12 transition duration-300 hover:border-b items-center">

        <a class="flex  items-center send-mail" href="mailto:hasanmuzak@yahoo.com">
          <span class="font-semibold uppercase text-xs">Send Mail</span>
        </a>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.send-mail{
  transition: .25s;
}
.send-mail:hover{
  color: #ffc68a;
  text-decoration: underline;
}
.intro-section {
  padding-top: 240px;
  height: 100vh;
  border-color: rgba(255, 255, 255, 0.18);
}
.welcome-title {
  font-size: 108px;
  font-weight: 300;
}

.fullstack-developer {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
}

.skill-container {
  background-color: #1e1e1e;
  color: #aeaeae;
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
}

.skill-container:hover {
  background-color: #ffc68a;
  color: #292a34;
}

@media screen and (max-width: 768px) {
  .intro-section {
    padding-top: 120px;
    height: auto;
    padding-bottom: 120px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .welcome-title {
    font-size: 72px;
  }
  .fullstack-developer {
    font-size: 18px;
  }
}

@media screen and (max-width: 420px) {
  .intro-section {
    padding-top: 80px;
  }
  .tags {
    flex-direction: column;
  }
  .tags > div {
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }
}
</style>
