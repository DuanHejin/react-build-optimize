# 关于React打包优化的研究

## 现象及问题
- 引入lodash导致打包体积增加
- 引入ant-design导致打包体积增加
- 引入moment导致打包体积增加

## 原因分析
- TODO
- TODO
 
<BR>

## 开始验证
### 准备工作
- 增加lodash，ant-design，moment依赖
  ```
  yarn add lodash ant-design moment
  ```
- 增加webpack-bundle-analyzer依赖，配置webpack，用于跟踪打包文件的组成部分，进行可视化分析
  ```
  yarn add webpack-bundle-analyzer -D
  ```
  ```
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  module.exports = {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
  ```

### 测试案例
1. 不引入依赖包，查看bundle文件大小及组成
2. 引入lodash，查看bundle文件大小及组成
3. 引入ant-design，查看bundle文件大小及组成
4. 引入moment，查看bundle文件大小及组成

### 优化方案
1. lodash优化方式
   - cherry pick按需加载模式引入lodash，查看bundle文件大小及组成
   - 使用lodash-webpack-plugin + babel-plugin-lodash进行优化
2. ant-design优化方式
   - TODO
   - TODO
3. moment优化方式
   - TODO
   - TODO

## 参考
- [lodash 打包体积优化及原理](https://www.jianshu.com/p/f03ff4f3a8b3)
- [解决React+Ant Design 打包后vendors.js过大问题](https://blog.csdn.net/qq_36400206/article/details/104605580)