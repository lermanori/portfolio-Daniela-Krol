<template>
    <section class="bg-black text-white py-16 h-half-screen lg:h-screen">
        <div class="h-full flex items-center justify-center">
            <appBio :bio="bio" :home="home"/>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import appBio from '~/components/atoms/bio/index.vue'
    export default Vue.extend({
        props:['bio',"home"],
        components:{
            appBio
        }
    })
</script>

<style scoped>

</style>