const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.export = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/main.scss"'
      }
    }
  }
}