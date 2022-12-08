import { createApp } from 'vue'
import { Button,
         Toast,
         Swiper,
         SwiperItem,
         Sku, Popup, InputNumber, Price, Icon,
         Navbar,
         Image,
         Cell } from '@nutui/nutui-taro';

import './app.less'
import "@nutui/nutui-taro/dist/packages/inputnumber/index.scss";

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // 对应 onLaunch
  onLaunch () {},

  // 对应 onShow
  onShow (options) {},

  // 对应 onHide
  onHide () {},

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button)
   .use(Toast)
   .use(Swiper)
   .use(SwiperItem)
   .use(Sku)
   .use(Popup)
   .use(InputNumber)
   .use(Price)
   .use(Icon)
   .use(Navbar)
   .use(Image)
   .use(Cell)

export default App
