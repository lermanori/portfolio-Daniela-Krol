<template>
  <div class="absolute top-0 left-0">
    <svg
      @click="$router.push('/')"
      class="mx-4 my-2 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 34.477 33.593"
    > 
      <g transform="translate(-3482.761 -1101.703)">
        <line class="a" x2="31" y2="30" transform="translate(3484.5 1103.5)" />
        <line class="a" x1="31" y2="30" transform="translate(3484.5 1103.5)" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {}
});
</script>

<style scoped>
  .a {
    fill: none;
    stroke: #fff;
    stroke-width: 5px;
  }
</style>