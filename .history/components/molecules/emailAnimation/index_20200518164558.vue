<template>
<div :class="['mailAnimationWrapper',State]" >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 786.8 803" id="mailAnimationSvg" v-if="State!='not-active'">
  <g id="Mail">
    <path fill="#000" d="M255.8 548l71.9 71.9a43.9 43.9 0 0 0 62 0L636 373.5a43.9 43.9 0 0 0 0-62L478.1 153.6a43.9 43.9 0 0 0-62 0L169.7 400a43.8 43.8 0 0 0 0 62l39.6 39.6m14.2 14.2l18.1 18.1m109.8 77.7c-3.5-1.1-6.8-3-9.6-5.8L183.9 447.9a23.7 23.7 0 0 1-6.1-23h173.6v186.7zm-36.2-206.8l29.7-29.7a10 10 0 1 0-14.1-14.1L287 404.8h-29.1l90.4-90.4a10 10 0 1 0-14.1-14.1L229.5 404.8h-36.3L421 177.1V381a23.9 23.9 0 0 1-23.8 23.8h-82zm306.7-45.4L375.5 605.8a24.7 24.7 0 0 1-4.1 3.3V424.8h25.8A43.9 43.9 0 0 0 441 381v-25.8h114.6l-57.9 57.9c-2 2-2.9 4.5-2.9 7.1s1 5.1 2.9 7.1a10 10 0 0 0 14.1 0l72-72h41.3c-.8 1.4-1.9 2.8-3.2 4.1zM441 335.2V161.6c8-2.1 16.8-.1 23 6.1l157.9 157.9c2.7 2.7 4.7 6 5.9 9.6H441z"/>
    <path d="M372.7 275.8a9.9 9.9 0 0 0-7.1-2.9 9.9 9.9 0 0 0-10 10 9.9 9.9 0 0 0 10 10 9.9 9.9 0 0 0 10-10c0-2.7-1.1-5.2-2.9-7.1z"/>
  </g>
  <g id="Windstriche">
    <path id="StrichMitte" d="M153.2 650a10 10 0 0 1-7.1-17l101.8-101.8a10 10 0 1 1 14.1 14.1L160.3 647.1c-2 1.9-4.5 2.9-7.1 2.9z"/>
    <path id="StrichUnten" d="M208.7 662.3a10 10 0 0 1-7.1-17l47.1-47.8a10 10 0 1 1 14.2 14l-47.1 47.8c-1.9 2-4.5 3-7.1 3z"/>
    <path id="StrichOben" d="M172.5 565.6a10 10 0 0 1-7.1-17l47.1-47.8a10 10 0 1 1 14.2 14l-47.1 47.8c-1.9 2-4.5 3-7.1 3z"/>
    <circle id="WindBall" cx="150" cy="580" r="10"/>
  </g>
</svg>
     <slot name="loading_text" class="text-center w-full" v-if="State=='loading'"/>
     <slot name="done_text" class="text-center w-full" v-if="State=='done'"/>
</div>

</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props:{
            state:{
                type:String,
                default:'not-active'
            }
        },
  computed:{
    State(){
      return this.state;
    }
  }
    })
</script>

<style lang="scss" scoped>
.mailAnimationWrapper {
  max-width: 400px;
}
</style>