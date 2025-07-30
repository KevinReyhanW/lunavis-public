const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        implementation: require('sass'),
        additionalData: '', // This triggers the correct loader path
      },
      sass: {
        implementation: require('sass'),
        additionalData: '', // Same for indented Sass syntax
      }
    }
  }
})
