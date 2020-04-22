<template>
  <main>
    <open-section :name="name" />
    <bio-section :bio="bio" :home="true" />
    <grid-skills-section :gridItems="gridItems" :home="true">
      
    </grid-skills-section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import openSection from "~/components/organisms/openSection/index.vue";
import bioSection from "~/components/organisms/bioSection/index.vue";
import gridSkillsSection from '~/components/organisms/gridSkillsSection/index.vue'

export default Vue.extend({
  props: ["name", "bio" ,"gridItems"],
  components: {
    openSection,
    bioSection,
    gridSkillsSection
  }
});
</script>

<style scoped>
</style>