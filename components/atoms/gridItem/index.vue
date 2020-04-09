<template>
  <div @click="handle_click" class="w-1/3 border-2 border-black px-4 py-1 h-32 lg:h-64 flex items-center justify-center">
    <div class="text-xl lg:text-3xl font-vermin text-center">{{item.title}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props:['item'],
    methods:{
      handle_click(){
        this.$emit('clicked',this.item);
      }
    }
});
</script>

<style scoped>
</style>