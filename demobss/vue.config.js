const { defineConfig } = require('@vue/cli-service')
const { ESLint } = require('eslint')
module.exports = defineConfig({
  // cors 이슈에 대응하는 방법 2)
  // 참고 :  https://jasunhee.tistory.com/312
  devServer: {
    proxy: 'http://localhost:8080'
  },
  transpileDependencies: true,
  lintOnSave : false,
  devServer:{
    proxy: 'http://localhost:8080'
  }
})
