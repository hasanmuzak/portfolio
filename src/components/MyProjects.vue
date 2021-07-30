<template>
  <div  class="project-section pt-8 pb-6 px-8">
    <div class="container mx-auto">
      <h1
        class="justify-end flex items-center mb-6 text-lg title"
        data-aos="fade-down" data-aos-duration="1000"
      >
        <span>My Projects <i class="bx bxs-pencil ml-2"></i></span>
      </h1>
      <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        <div
          class="project-item p-4 flex flex-col justify-between items-center h-full"
          v-for="(item, index) in projects"
          :key="index"
          data-aos="fade-up" :data-aos-duration="`${index*250}`"
        >
          <span class="project-title">{{ item.title }}</span>
          <div class="mt-4">
            <p class="text-center description">
              {{ item.description }}
            </p>
          </div>
          <div class="flex items-center mt-4 w-full">
            <a target="_blank" class="w-full" :href="item.review_link">
              <button
                class="
                  custom-button
                  review-btn
                  flex
                  items-center
                  w-full
                  justify-center
                  py-2
                  border-b-2
                  mr-2
                "
              >
                Review <i class="ml-1 bx bxs-chevrons-right"></i>
              </button>
            </a>
            <a target="_blank" class="w-full" :href="item.source_code">
              <button
                class="
                  custom-button
                  code-btn
                  flex
                  items-center
                  w-full
                  justify-center
                  py-2
                  border-b-2
                  ml-2
                "
              >
                Code <i class="ml-1 bx bx-code-alt"></i>
              </button>
            </a>
          </div>

          <div class="mt-4">
            <span
              class="tag rounded-full font-semibold"
              v-for="(tag, index) in item.tags"
              :key="index"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Indeed Clone",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            '"Indeed Clone" is a clone project of "indeed.com". I developed "indeed.com" by using Node.js. ',
          tags: [
            "NodeJS",
            "Jinja",
            "MongoDB",
            "ExpressJS",
            "VueJS",
            "TailwindCSS",
            'IView UI'
          ],
        },

        {
          title: "Medium Clone",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            '"Medium Clone" is a clone project of "medium.com". I developed "medium.com" by using VueJS and FastAPI.',
          tags: [
            "Python",
            "MySQL",
            "FastAPI",
            "VueJS",
            "TailwindCSS",
            'Ant Design UI'
          ],
        },

        {
          title: "Admin Dashboard (E-Commerce)",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            '"Admin Dashboard" is the admin panel of my another project called "E-Commerce".',
          tags: [
            "Python",
            "PostgreSQL",
            "Django",
            "VueJS",
            "TailwindCSS",
            'Ant Design UI'
          ],
        },


        {
          title: "E-Commerce",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            '"E-Commerce" is a project that I developed to sharpen my Python & VueJS skills.',
          tags: [
            "Python",
            "PostgreSQL",
            "Django",
            "VueJS",
            "TailwindCSS",
            "Ant Design UI"
          ],
        },

        {
          title: "Algorithm Visualizer (Bachelor Project)",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            '"Algorithm Visualizer" is a project to visualize all well-known sorting and path-finding algorithms.',
          tags: [
            "Javascript",
            "VueJS",
            "TailwindCSS",
            "Canvas",
            "AT UI",
            "Less"
          ],
        },

                {
          title: "Stackoverflow Clone",
          review_link: "https://indeed-clone-tr.herokuapp.com/",
          source_code: "https://github.com/hasanmuzak/indeed-clone-tr",
          description:
            'Stackoverflow redesigned clone project. ',
          tags: [
            "Python",
            "VueJS",
            "TailwindCSS",
            "FastAPI",
            "Ant UI",
            "Less"
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-weight: 800;
}

.project-item {
  background: linear-gradient(
    180deg,
    rgba(24, 20, 28, 1) 0%,
    rgba(13, 10, 18, 1) 100%
  );
}

.project-title {
  color: #ffc68a;
  font-weight: 600;
  display: block;
  text-align: center;
  text-transform: uppercase;
}

.review-btn {
  color: #707070;
  font-weight: 600;
  transition: 0.25s;
  border-color: rgba(20, 20, 20, 0);
}
.review-btn:hover {
  border-color: #84dfe2;
  color: #84dfe2;
}

.code-btn {
  color: #707070;
  font-weight: 600;
  transition: 0.25s;
  border-color: rgba(20, 20, 20, 0);
}

.code-btn:hover {
  border-color: #a4ade9;
  color: #a4ade9;
}

.description {
  font-family: "Bitter", serif;
  font-size: 12px;
  color: #b4b4b4;
}

.tag {
  margin-right: 4px;
  padding: 3px 12px;
  border: 1px solid #37343d;
  margin-bottom: 6px;
  display: inline-block;
  color: #7b7986;
  font-size: 12px;
  transition: 0.25s;
  cursor: pointer;
}

.tag:hover {
  background-color: #ffc68a;
  border-color: #ffc68a;
  color: #37343d;
}
</style>
