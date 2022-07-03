<template>
	<view>
		<text>页面没找到！</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notFoundOpts:{
					timer:null
				}
			}
		},
		// 页面加载
		onLoad() {
			 this.notFoundOpts.timer = setTimeout(() => {
				uni.navigateTo({
					url: "../index/index"
				})
			}, 2000)
		},
		methods: {

		},
		beforeDestroy() {
			clearTimeout(this.notFoundOpts.timer)
		}
	}
</script>

<style>

</style>
