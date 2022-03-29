const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // 方法1：不能配置多个代理，只能转发给port = 28082
  //      不能灵活控制是否代理
  // devServer:{
  //   proxy:'http://localhost:28082'
  // }

  // 方法2：
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:28082',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      }
    }
  }
})