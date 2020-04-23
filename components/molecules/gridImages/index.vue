<template>
      <div class="flex flex-wrap justify-center m-2">
          <template v-for="img in gridItems">
            <img v-if="img!== ''" :src="img" alt :key="img" class="h-auto w-full p-2 md:w-1/2 object-contain object-center" />
          </template>
      </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['gridItems']
    })
</script>

<style scoped>

</style>