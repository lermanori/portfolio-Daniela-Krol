<template>
  <div
    class="text-green-400 text-3xl lg:text-5xl text-center font-agency"
    :style="{textAlign:'center'}"
    v-html="bio"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["bio"]
});
</script>

<style scoped>
</style>