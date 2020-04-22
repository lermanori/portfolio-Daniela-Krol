<template>
  <div
    :class="['text-green-400',home == true ?'text-3xl':'text-2xl',home == true ?'lg:text-5xl':'lg:text-4xl','text-center','font-agency']"
    :style="{textAlign:'center'}"
    v-html="bio"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["bio", "home"]
});
</script>

<style scoped>
</style>