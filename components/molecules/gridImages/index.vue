<template>
      <div class="m-2">
          <template v-for="img in images">
            <img v-if="img!== ''" :src="img" alt :key="img" class="h-auto w-full mx-auto p-2 md:w-1/2 object-contain object-center" />
          </template>
          <template v-for="video in videos">
            <video controls v-if="img!== ''" :src="video" alt :key="video" class="h-auto w-full mx-auto p-2 md:w-1/2 object-contain object-center" />
          </template>
      </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['gridItems'],
        computed:{
            // https://res.cloudinary.com/drqh3tjwn/video/upload/v1588852021/level2_abyruz.mp4
            images(){
                return this.gridItems.filter((url:string)=>this.getExtension(url) != 'mp4')
            },
            videos(){
                return this.gridItems.filter((url:string)=>this.getExtension(url) == 'mp4')
            }
        },
        methods:{
            getExtension(url:string){
                const splitted = url.split('.')
                const extension = splitted[splitted.length - 1];
                return extension;
            }
        }
    })
</script>

<style scoped>

</style>