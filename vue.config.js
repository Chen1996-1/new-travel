const path = require('path')
module.exports={
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('@', path.join(__dirname, './src'))
  },
  devServer:{
    proxy: { // 代理设置 获取后端API 数据 设置项
        '/api': {
          target: 'http://localhost:8080', // 后端地址和端口设置
          pathRewrite: { // 路径重新映射
            '^/api': '/mock'
          }
        }
      }
  }

}