const { defineConfig } = require('@vue/cli-service')
const { ESLint } = require('eslint')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer:{
    proxy: {
      '/': {
        "target": 'http://localhost:8080',
        "pathRewrite" :{'^/':''},
        "changeOrigin": true
      },
    }
  }
})
