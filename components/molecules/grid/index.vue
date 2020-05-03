<template>
<div class="flex flex-wrap">
        <gridItem class="cursor-pointer" v-for="item in gridItems" :key="item.id" :item="item" @clicked="handle_click" />
        <gridItem class="cursor-pointer" :key="'cv'" :item="{title:'cv'}"  v-if="home" @clicked="handle_click_cv" />
        <!-- <a  href="https://lermanori.github.io/protfolio-2020/dani-cv.jpg" style="decoration:none;display:inline-block" download>
        </a> -->
</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import gridItem from '~/components/atoms/gridItem/index.vue'

    export default Vue.extend({
        props:['gridItems','home'],
        components:{
            gridItem
        },
        methods:{
            handle_click(item:any){
                this.$emit('clicked',item);
            },
            handle_click_cv(item:any){
                console.log("download cv");
                window.open("https://lermanori.github.io/protfolio-2020/dani-cv.jpg")
            }
        }
   
    })
</script>

<style scoped>

</style>