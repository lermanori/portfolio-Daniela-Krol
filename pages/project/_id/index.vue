<template>
  <div class="bg-black min-h-screen pb-24">
    <absoluteBackButton />
    <appProject :name="project.title" :bio="project.desc" :grid-items="project.keywords" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import appProject from "~/components/page/project/index.vue";
import absoluteContactButton from "~/components/organisms/absoluteContactButton/index.vue";
import absoluteBackButton from "~/components/organisms/absoluteBackButton/index.vue";
export default Vue.extend({
  async asyncData({ params,payload  }) {
    if (payload) return { project: payload }
    else{
    //   const url = `${process.env.BASE_URL}/users/dani_krol/tag/${params.id}/`;
    // const { data: project } = await axios.get(url);
    // return { project };
    }
  },
  components: {
    appProject,
    absoluteContactButton,
    absoluteBackButton
  }
});
</script>

<style scoped>
</style>