import axios from 'axios'
export default {
  mode: 'universal',
  server: {
    port: 8082,
  },
  /*
   ** Headers of the page
   */
  router: {
    base: '/protfolio-2020/'
  },
  generate: {
    dir: "docs",
    async routes(){
      try{
        const {data:user} = await axios.get(`https://protfolio-api.herokuapp.com/users/dani_krol`);
        console.log(user);
        const projects = user.projects.map(x=>`/category/${x.id}`)
        const tags = user.projects.map(x=>x.tags).flat().map(x=>`/project/${x}`);
        return [
          ...projects,...tags
        ]
      }
      catch(err){
        console.log(err);
      }
    }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
