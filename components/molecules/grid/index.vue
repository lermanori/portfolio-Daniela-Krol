<template>
<div class="flex flex-wrap">
        <gridItem class="cursor-pointer" v-for="item in gridItems" :key="item.id" :item="item" @clicked="handle_click" />
</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import gridItem from '~/components/atoms/gridItem/index.vue'

    export default Vue.extend({
        props:['gridItems'],
        components:{
            gridItem
        },
        methods:{
            handle_click(item:any){
                this.$emit('clicked',item);
            }
        }
   
    })
</script>

<style scoped>

</style>