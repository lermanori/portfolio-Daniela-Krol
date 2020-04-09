<template>
  <section class="h-screen bg-black">
    <div class="h-full flex justify-center items-end">
      <div class="text-center flex flex-col justify-between" style="height:50%">
        <titleApp :name="name" />
        <scrollApp v-if="!scrolled" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import titleApp from "~/components/atoms/title/index.vue";
import scrollApp from "~/components/atoms/scroll/index.vue";

export default Vue.extend({
  props: ["name"],
  data:()=>({
    scrolled:false
  }),
  components: {
    titleApp,
    scrollApp
  },
    mounted() {
    const handleScroll = () => {
      this.scrolled = true;
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
</style>