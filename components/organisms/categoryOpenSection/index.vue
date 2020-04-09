<template>
  <section class="h-screen">
    <div class="h-full flex justify-center items-end">
      <div class="text-center flex flex-col justify-between" style="height:60%">
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
  data: () => ({
    scrolled: false
  }),
  components: {
    titleApp,
    scrollApp
  },
  mounted() {
    const handleScroll2 = (e: any) => {
      const top = e.target.scrollingElement.scrollTop;
      console.log(top);
      if (top > 50) {
        this.scrolled = true;
      }
      else{
        this.scrolled = false;

      }
    };
    window.addEventListener("scroll", handleScroll2);
  }
});
</script>

<style scoped>
</style>