<template>
  <div>
    <absoluteContactButton />
    <homepage :name="name" :bio="bio" :gridItems="user.projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import absoluteContactButton from "~/components/organisms/absoluteContactButton/index.vue";
import homepage from "~/components/page/homepage/index.vue";
import axios from "axios";
export default Vue.extend({
  async asyncData({ payload }) {
    if (payload) return { user: payload };
    else {
      const { data: user } = await axios.get(
        `${process.env.BASE_URL}/users/dani_krol`
      );
      return { user };
    }
  },
  data: () => ({
    name: "DANIELA KROL",
    bio: `I'm a freelance artist from Tel Aviv.<br>
         I do Graphic design, Web design,<br>
          3D art and AR filters`,
    gridItems: [
      "graphic design",
      "web design",
      "3d art",
      "AR filters",
      "cv",
      "fun stuff"
    ]
  }),
  components: {
    absoluteContactButton,
    homepage
  },
  created() {
    // console.log(`${process.env.BASE_URL}/users/dani_krol`)
  }
});
</script>

<style scoped>
</style>