<template>
  <view class="content">
    <view class="title">{{title}}</view>
    <view class="news-content">
      <rich-text class="" :nodes="contents"></rich-text>
    </view>
  </view>
</template>

<script>
  import htmlParser from '@/common/html-parser.js';
  
  export default {
    data() {
      return {
        title: '',
        contents: [],
      }
    },
    onLoad(e) {
      uni.showLoading({
        title: '加载中...',
      });
      // 查询详情
      uni.request({
        url: `https://unidemo.dcloud.net.cn/api/news/36kr/${e.newsId}`,
        method: 'GET',
        data: {},
        success: res => {
          uni.hideLoading();
          console.log(res);
          this.title = res.data.title;
          this.contents = htmlParser(res.data.content);
        },
        fail: () => {},
        complete: () => {},
      });
    },
    methods: {
      
    },
    
  }
</script>

<style>
.content {
  padding: 10rpx 2%;
  width: 96%;
  flex-wrap: wrap;
}
.title {
  line-height: 2em;
  font-weight: 700;
  font-size: 38rpx;
}
.news-content {
  line-height: 2em;
}
</style>
