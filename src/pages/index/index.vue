<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点12我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
    <nut-inputnumber v-model="values" />
    <nut-image src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" width="100" height="100"></nut-image>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro'

export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      values: 1,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      // state.show = true;
      // state.msg2 = msg;
      // state.type = type;
      // state.cover = cover;
      Taro.navigateTo({ url: "/pages/jdItem/jdItem" })
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
