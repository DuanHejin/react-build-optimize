# 关于 React 打包优化的研究

## 现象及问题

- 引入 lodash 导致打包体积增加
- 引入 ant-design 导致打包体积增加
- 引入 moment 导致打包体积增加

## 原因分析

- TODO
- TODO

<BR>

## 开始验证

### 准备工作

- 增加 lodash，ant-design，moment 依赖
  ```
  yarn add lodash ant-design moment
  ```
- 增加 webpack-bundle-analyzer 依赖，配置 webpack，用于跟踪打包文件的组成部分，进行可视化分析
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

1. 不引入依赖包，查看 bundle 文件大小及组成
2. 引入 lodash，查看 bundle 文件大小及组成
3. 引入 ant-design，查看 bundle 文件大小及组成
4. 引入 moment，查看 bundle 文件大小及组成

### 优化方案

1. lodash 优化方式
   - cherry pick 按需加载模式引入 lodash，查看 bundle 文件大小及组成
   - 使用 lodash-webpack-plugin + babel-plugin-lodash 进行优化
2. ant-design 优化方式
   - TODO
   - TODO
3. moment 优化方式
   - TODO
   - TODO

## 参考

- [lodash 打包体积优化及原理](https://www.jianshu.com/p/f03ff4f3a8b3)
- [解决 React+Ant Design 打包后 vendors.js 过大问题](https://blog.csdn.net/qq_36400206/article/details/104605580)
- [Prettier 看这一篇就行了](https://zhuanlan.zhihu.com/p/81764012)
- [Prettier 官网](https://prettier.io/docs/en/)
