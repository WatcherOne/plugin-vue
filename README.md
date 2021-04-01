# Vue plugin project

## vue-hover-text

> 下载组件依赖

npm install hoverText --save -dev

> 引入组件

npm run dist ==== 生成打包的JS文件, 直接引入即可

> 使用组件参数说明

1.maxWidth: '100px'       // 文案显示的最大长度, 超过才hover显示 否则不hover显示

2.fontSize: 14            // 文字的大小会导致长度的变化

3.htmlText：true          // 是否显示slot里面的html标签

4.hoverTextBg: '#333'     // 悬浮文案的背景色

5.hoverTextColor: '#fff'  // 悬浮文案的颜色

> dom 组件使用

`<hoverText maxWidth='200px' :htmlText='false'>测试数据过长情况</hoverText>`

### extra

npm publish --- 发布插件
