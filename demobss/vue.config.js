const { defineConfig } = require('@vue/cli-service')
const { ESLint } = require('eslint')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer:{                           // cors 이슈에 대응하는 방법
    proxy: 'http://localhost:8080'      // 참고 :  https://jasunhee.tistory.com/312
  }
})