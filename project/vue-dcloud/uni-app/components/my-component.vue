<template>
	<view @tap="doTap">
    <h2>{{title}}</h2>
    <view>{{content}}</view>
	</view>
</template>

<script>
	export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
    },
		data() {
			return {
				
			};
		},
    methods: {
      doTap: function () {
        console.log(`my-component doTap, title: ${this.title}, content: ${this.content}`);
        this.$emit('do-tap', {
          title: this.title,
          content: this.content,
        });
      }
    },
	}
</script>

<style>

</style>
