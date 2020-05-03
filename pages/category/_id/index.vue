<template>
    <div>
        <absoluteBackButton/>
        <absoluteContactButton/>
        <categoryPage :name="project.title" :bio="project.desc" :grid-items="project.tags"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import axios from 'axios'
    import categoryPage from '~/components/page/category/index.vue'
import absoluteContactButton from "~/components/organisms/absoluteContactButton/index.vue";
import absoluteBackButton from "~/components/organisms/absoluteBackButton/index.vue";

    export default Vue.extend({
        async asyncData({params, payload}){
            if (payload) return { project: payload }
            const url = `${process.env.BASE_URL}/users/dani_krol/${params.id}`
            const {data:project} =await axios.get(url);
            return {project};
        },
        components:{
            categoryPage,
            absoluteContactButton,
            absoluteBackButton
        }

    })
</script>

<style scoped>

</style>