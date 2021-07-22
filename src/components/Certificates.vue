<template>
  <div class="certificates-section p-8 mt-12 pb-16">
    <div class="container mx-auto text-center">
      <h1 class="flex items-center text-lg title" data-aos="zoom-in" data-aos-duration="1000">
        <i class="bx bx-subdirectory-right mr-2"></i
        ><span>Notable Certificates</span>
      </h1>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        <div
        data-aos="zoom-out" data-aos-duration="600"
          class="flex p-4 rounded certificate-item flex-col h-full justify-between"
        >
          <a
            href="https://www.udemy.com/course/sifirdan-ileri-seviye-vuejs-2-vuex-vue-router-egitim-seti/"
            class="title-sub mb-3 underline"
          >
            Sıfırdan İleri Seviye Vue.JS Eğitimi
          </a>

          <a
            href="https://www.udemy.com/certificate/UC-29260beb-9bc0-4618-9f5e-aa4f06d54f0d/"
            target="_blank"
            >View Certificate</a
          >
          <span
            class="mt-2 text-xs p-2 rounded  course-id"
            title="Certificate ID"
            >UC-29260beb-9bc0-4618-9f5e-aa4f06d54f0d</span
          >
        </div>
        <div
        data-aos="flip-up" data-aos-duration="450"
          class="flex p-4 rounded certificate-item flex-col h-full justify-between"
        >
          <a
            href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
            class="title-sub mb-3 underline"
          >
            The Ultimate MySQL Bootcamp
          </a>

          <a
            href="https://www.udemy.com/certificate/UC-070b6bd9-0d7b-4369-901a-d0d19a957b2c/"
            target="_blank"
            >View Certificate</a
          >
          <span
            class="mt-2 text-xs p-2 rounded  course-id"
            title="Certificate ID"
            >UC-070b6bd9-0d7b-4369-901a-d0d19a957b2c</span
          >
        </div>

        <div
        data-aos="flip-left" data-aos-duration="250"
          class="flex p-4 rounded certificate-item flex-col h-full justify-between"
        >
          <a
            href="https://www.udemy.com/course/nodejs-the-complete-guide/"
            class="title-sub mb-3 underline"
          >
            NodeJS - The Complete Guide
          </a>

          <a
            href="https://www.udemy.com/certificate/UC-23fbc43c-3256-4cd1-916e-8ff46f99cfcb/"
            target="_blank"
            >View Certificate</a
          >
          <span
            class="mt-2 text-xs p-2 rounded  course-id"
            title="Certificate ID"
            >UC-23fbc43c-3256-4cd1-916e-8ff46f99cfcb</span
          >
        </div>
        <div
        data-aos="flip-down" data-aos-duration="750"
          class="flex p-4 rounded certificate-item flex-col h-full justify-between"
        >
          <a
            href="https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/"
            class="title-sub mb-3 underline"
          >
            Nuxt.js - Vue.js on Steroids
          </a>

          <a
            href="https://www.udemy.com/certificate/UC-9dc1101a-1942-48d2-959b-c8b629786a97/"
            target="_blank"
            >View Certificate</a
          >
          <span
            class="mt-2 text-xs p-2 rounded  course-id"
            title="Certificate ID"
            >UC-9dc1101a-1942-48d2-959b-c8b629786a97</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-weight: 800;
}

.certificate-item {
  background: #272727;
}

.title-sub {
  color: #ffc68a;
}

.course-id {
  transition: 0.25s;
}
.course-id:hover {
  background-color: #86ba72;
  color: #fff;
  cursor: pointer;
}
</style>
