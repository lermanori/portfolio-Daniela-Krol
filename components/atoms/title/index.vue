<template>
            <div class="text-6xl lg:text-7xl font-vermin text-white -mt-16">{{name}}</div>

</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['name']
    })
</script>

<style scoped>

</style>