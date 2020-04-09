/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily:{
      'vermin':['vermin'],
      'agency':['agency'],
    },
    extend:{
      fontSize:{
        '7xl':'9rem',
      },
      colors:{
        'green-400':'#08EA00'
      },
      height:{
        'half-screen':'50vh'
      }
    }
  },
  variants: {},
  plugins: []
}
