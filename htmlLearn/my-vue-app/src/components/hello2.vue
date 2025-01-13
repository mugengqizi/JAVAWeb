<!-- App.vue -->
<template>
  <div>
    <!-- 使用 slick-carousel 组件展示轮播图 -->
    <slick-carousel :options="slickOptions">
      <!-- 循环遍历 images 数组生成每一张轮播图的图片 -->
      <div v-for="(image, index) in images" :key="index">
        <!-- 图片标签，绑定 src 属性为 images 数组中的图片路径 -->
        <img :src="image" :alt="'Slide ' + index" style="width: 100%; height: auto;">
      </div>
    </slick-carousel>
  </div>
</template>
 
<script>

import SlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  // 注册 SlickCarousel 组件
  components: { SlickCarousel },
  data() {
    return {
      // 图片列表
      images: ['../../../1-8/imgs/image1.jpg', '../../../1-8/imgs/image2.jpg', '../../../1-8/imgs/image3.jpg'],
      // slick-carousel 的配置选项
      slickOptions: {
        dots: true, // 显示分页点
        infinite: true, // 无限循环
        speed: 500, // 切换速度，单位为毫秒
        slidesToShow: 1, // 每次展示的幻灯片数量
        slidesToScroll: 1, // 每次滚动的幻灯片数量
        autoplay: true, // 自动播放
        autoplaySpeed: 3000 // 自动播放间隔时间，单位为毫秒
      }
    }
  }
}
</script>