<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
    <view>
      <switch></switch>
    </view>
    <view>
      <uni-number-box></uni-number-box>
    </view>
    <view>
      <my-component title="标题" content="内容" @do-tap="doTap"></my-component>
    </view>
	</view>
</template>

<script>
  import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue";
  import myComponent from "@/components/my-component.vue";
  
	export default {
    components: {
      uniNumberBox,
      myComponent,
    },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
      doTap: function (args) {
        console.log(`index doTap ${JSON.stringify(args)}`);
      },
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
