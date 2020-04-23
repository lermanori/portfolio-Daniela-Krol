<template>
  <div class="bg-black">
    <!-- <categoryOpenSection :name="name" /> -->
    <div class="text-center">
      <titleApp :name="name" class="pt-12" />
      <bioApp :bio="bio" class="md:py-4" />
      <imgGrid :gridItems="gridItems" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import categoryOpenSection from "~/components/organisms/categoryOpenSection/index.vue";
import bioApp from "~/components/atoms/bio/index.vue";
import titleApp from "~/components/atoms/title/index.vue";
import imgGrid from "~/components/molecules/gridImages/index.vue";
export default Vue.extend({
  props: ["name", "bio", "gridItems"],
  components: {
    categoryOpenSection,
    bioApp,
    titleApp,
    imgGrid
  }
});
</script>

<style scoped>
</style>