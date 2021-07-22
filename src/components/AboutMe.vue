<template>
  <div class="about-me-section p-8">
    <div class="container mx-auto text-center">
      <h1
        class="text-left flex items-center text-lg title"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        <i class="bx bx-subdirectory-right mr-2"></i><span>My Skills</span>
      </h1>
      <div
        class="grid mt-8 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class=" skill-item py-2 border flex items-center justify-center"
          data-aos="fade-down" :data-aos-duration="index*150"
        >
          <i :class='item.icon'></i>
          <span class="ml-1">{{ item.title }}</span>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">
        <div
          data-aos="fade-up" data-aos-duration="500"
          class="flex problems-solved-item flex-col justify-between p-8 rounded"
        >
          <i class="bx bxs-pin pin-icon1"></i>
          <i class="bx bxs-pin pin-icon3"></i>
          <span class="level-tag1">medium</span>
          <span class="num">+ 200</span>
          <p class="info-item">Questions Solved on</p>
          <a class="link" href="/" target="_blank">Hackerrank</a>
        </div>
        <div
          data-aos="fade-down" data-aos-duration="250"
          class="flex problems-solved-item flex-col justify-between p-8 rounded"
        >
          <i class="bx bxs-pin pin-icon2"></i>
          <span class="level-tag1">medium & hard</span>
          <span class="num">+ 100</span>
          <p class="info-item">Questions Solved on</p>
          <a class="link" href="/" target="_blank">LeetCode</a>
        </div>
        <div
          data-aos="fade-up" data-aos-duration="750"
          class="flex problems-solved-item flex-col justify-between p-8 rounded"
        >
          <i class="bx bxs-pin pin-icon3"></i>
          <i class="bx bxs-pin pin-icon1"></i>
          <span class="level-tag1">hard</span>
          <span class="num">+ 50</span>
          <p class="info-item">Questions Solved on</p>
          <a class="link" href="/" target="_blank">Project Euler</a>
        </div>
      </div>

      <p data-aos="fade-up-left" data-aos-duration="250"  class="about-text mt-16">
        An enthusiast computer engineering student from Turkey who is interested in Web Development. <br>
        Due to this reason, I use Python for backend development and Javascript (Vue) for frontend development. <br> <br>
        ~ More information can be found in my CV.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Django",
          type_id: 1,
          icon : 'bx bx-xs bxl-python'
        },
        {
          title: "FastAPI",
          type_id: 1,
          icon : 'bx bx-xs bxl-python'
        },
        {
          title: "VueJS",
          type_id: 2,
          icon : 'bx bx-xs bxl-vuejs'
        },
        {
          title: "ExpressJS",
          type_id: 2,
          icon : 'bx bx-xs bxl-nodejs'
        },
        {
          title: "PostgreSQL",
          type_id: 3,
          icon : 'bx bx-xs bx-data'
        },
        {
          title: "MySQL",
          type_id: 3,
          icon : 'bx bx-xs bx-data'

        },
        {
          title: "MongoDB",
          type_id: 3,
          icon : 'bx bx-xs bx-data'
        },
        {
          title: "Docker",
          type_id: 4,
          icon : 'bx bx-xs bxl-docker'

        }
      ]
    };
  }
};
</script>

<style scoped>
.about-text {
  color: #a5a5a5;
  font-weight: 600;
}
.link {
  font-weight: 600;
  margin-top: 8px;
}
.link:hover {
  color: #ffc68a;
}
.info-item {
  color: #a5a5a5;
  font-style: italic;
  text-decoration: underline;
}
.num {
  font-size: 40px;
  color: #83dec4;
}
.title {
  text-transform: uppercase;
  font-weight: 800;
}

.info {
  letter-spacing: 0.025rem;
  font-family: "Bitter", serif;
  color: #8a8989;
}

.skill-item {
  border-color: #2b2b2b;
  color: #a0a0a0;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.25s;
  font-weight: 600;
  font-size: 13px;
}
.skill-item:hover {
  border-color: #ffc68a;
  background-color: #ffc68a;
  color: #191f2e;
}

.problems-solved-item {
  background-color: #1e1e1e;
  position: relative;
  transition: .25s;
  border: 1px solid transparent;
}
.problems-solved-item:hover {
  border-color: rgba(255, 255, 255, 0.1);
}
.pin-icon1 {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
  transform: rotate(45deg);
  color: rgba(255, 255, 255, 0.25);
}
.pin-icon2 {
  position: absolute;
  left: 50%;
  top: 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.25);
}
.pin-icon3 {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  transform: rotate(-45deg);
  color: rgba(255, 255, 255, 0.25);
}

.level-tag1 {
  position: absolute;
  right: -10px;
  bottom: -10px;
  color: #fff;
  background-color: #626fc2;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  padding: 5px 12px;
  border-radius: 4px;
}
</style>
