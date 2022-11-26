<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" title="订单详情">
    <template #left>
      <div>返回</div>
    </template>
    <template #right>
      <nut-icon class="right" name="share-n"></nut-icon>
    </template>
  </nut-navbar>
  <view class="index">
    <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <nut-cell :title="`基本用法`" desc="" @click="base = true"></nut-cell>
    <nut-sku
      v-model:visible="base"
      :sku="sku"
      :goods="goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>
  </view>
</template>

<script>
import { ref, reactive, onMounted, toRefs } from 'vue'

export default {
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // onLoad
  onLoad () {},

  // onReady
  onReady () {},

  // 对应 onShow
  onShow () {},

  // 对应 onHide
  onHide () {},

  // 对应 onPullDownRefresh
  onPullDownRefresh () {},

  setup () {
    const state = reactive({
      page: 2
    })
    const msg = ref('京东商品详情')
    const base = ref(false)
    const data = reactive({
      sku: [],
      goods: {}
    })
    onMounted(() => {
      fetch('https://storage.360buyimg.com/nutui/3x/data.js')
        .then((response) => response.json())
        .then((res) => {
          const { Sku, Goods, imagePathMap } = res;
          data.sku = Sku;
          data.goods = Goods;
        }) //执行结果是 resolve就调用then方法
        .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });
    // 切换规格类目
      const selectSku = (ss) => {
        const { sku, skuIndex, parentSku, parentIndex } = ss;
        if (sku.disable) return false;
        data.sku[parentIndex].list.forEach((s) => {
          s.active = s.id == sku.id;
        });
        data.goods = {
          skuId: sku.id,
          price: '4599.00',
          imagePath:
            '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
        };
      };
      // 底部操作按钮触发
      const clickBtnOperate = (op) => {
        base.value = false
        console.log('点击了操作按钮',op)
      } 
      // 关闭商品规格弹框
      const close = () => {
      }
      return { msg, base, selectSku, clickBtnOperate,close, ...toRefs(data), ...toRefs(state) };
  }
}
</script>
<style lang="less" scoped>
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>