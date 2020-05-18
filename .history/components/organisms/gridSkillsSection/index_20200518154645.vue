<template>
    <div class="bg-black">
        <grid class="bg-green-400" :gridItems="gridItems" @clicked="handle_click" :home="home"/>
        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import grid from '~/components/molecules/grid/index.vue'

    export default Vue.extend({
        props:['gridItems','home'],
        components:{
            grid,
        },
        methods:{
            handle_click(item:{id:string}){
                const route = `/category/${item.id}` 
                // this.$router.push(route);
                window.location.href = route;
                // console.log(route);
            }
        }
    })
</script>

<style scoped>

</style>