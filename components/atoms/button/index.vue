<template>
    <button @click="$emit('click')" :class="['leading-none','w-full','font-vermin',`text-${color}-400`,'px-4','py-1','border-2',`border-${color}-400`]" >
        {{text}}
    </button>        
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:['color','text']
    })
</script>

<style scoped>

</style>