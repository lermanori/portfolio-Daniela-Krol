<template>
  <div :class="['absolute', 'top-0', 'right-0',clicked ? 'sm:w-3/5 w-full':'','bg-black','z-20']">
    <my-btn
      @click="clicked=true"
      v-if="!clicked"
      class="text-xl lg:text-4xl xl:text-5xl"
      :color="'green'"
      :text="'Hey! Lets Talk :)'"
    />
    <div class="relative border-2 border-green-400 pb-6" v-if="clicked">
      <div class="absolute top-0 ml-2 mt-2 h-6 w-6 cursor-pointer" @click="clicked=false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.477 33.593">
          <g transform="translate(-3482.761 -1101.703)">
            <line class="a" x2="31" y2="30" transform="translate(3484.5 1103.5)" />
            <line class="a" x1="31" y2="30" transform="translate(3484.5 1103.5)" />
          </g>
        </svg>
      </div>
      <h1 class="text-white text-4xl font-agency text-center my-2">Hey! Lets Talk :)</h1>
      <div class="relative left-0 flex text-white justify-center">
        <div class="w-1/2 flex flex-col items-base mx-4">
          <input
            class="text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black"
            placeholder="Name"
            v-model="contactName"
          />
          <input
            class="text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black"
            placeholder="Mail"
            v-model="contactMail"
          />
          <input
            class="text-lg w-full mx-auto mb-2 mt-3 p-2 font-agency text-black"
            placeholder="Phone (if you want)"
            v-model="contactPhone"
          />
        </div>
        <div class="w-1/2 flex flex-col items-base mx-4">
          <input
            class="text-lg w-full h-full mx-auto mb-2 mt-3 p-2 font-agency text-black"
            placeholder="Message"
            v-model="contactMessage"
          />
        </div>
      </div>
      <div class="flex justify-end mr-4">
        <button @click="send_mail" class="bg-green-400 text-xl text-white px-3 py-1">send</button>
      </div>
      <emailAnimation class="text-white h-full w-64 mx-auto" :state.sync="Email_state">
        <template v-slot:loading_text><h1 class="text-white text-center text-2xl">sending Your Email...</h1></template>
        <template v-slot:done_text><h1 class="text-white text-center text-2xl">Thank You For Reaching Out.</h1></template>
      </emailAnimation>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import myBtn from "~/components/atoms/button/index.vue";
import axios from 'axios'
import emailAnimation from '~/components/molecules/emailAnimation/index.vue'

export default Vue.extend({
  data: () => ({
    clicked: false,
    contactName: "",
    contactMail: "",
    contactPhone: "",
    contactMessage: "",
    email_state:"not-active"
  }),
  computed:{
    Email_state(){
      return this.email_state;
    }
  },
  components: {
    myBtn,
    emailAnimation
  },
  methods: {
    async send_mail() {
        const url =process.env.BASE_URL + "/users/dani_krol/contact";
        const body = {
            name:this.contactName,
            mail:this.contactMail,
            phone:this.contactPhone,
            body:this.contactMessage,
        }
        this.email_state = 'loading'
        const res = await axios.post(url,body);
        this.email_state = 'done';
        setTimeout(()=>this.clicked = false,2000)
    }
  }
});
</script>

<style scoped>

  .a {
    fill: none;
    stroke: #fff;
    stroke-width: 5px;
  }

</style>