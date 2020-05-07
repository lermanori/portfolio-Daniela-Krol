<template>
  <div class="bg-black">
    <categoryOpenSection :name="name" />
    <!-- <bioApp :bio="bio" class="py-4"/> -->
    <gridSkillsSection :gridItems="gridItems"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import categoryOpenSection from "~/components/organisms/categoryOpenSection/index.vue";
import bioApp from "~/components/atoms/bio/index.vue";
import gridSkillsSection from '~/components/organisms/gridCategory/index.vue';
export default Vue.extend({
  props: ["name", "bio",'gridItems'],
  components: {
      gridSkillsSection,
    categoryOpenSection,
    bioApp
  }
});
</script>

<style scoped>
</style>