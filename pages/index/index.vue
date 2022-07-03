<template>
	<view class="content">
	<text @click="handleClick">home</text>
	</view>
</template>

<script>
	import {login} from "@/network/login.js"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			
		},
		methods: {
			handleClick(){
				login().then(res=>{
				},rej=>{
					console.log(rej,"rej");
				})
				// uni.navigateTo({
				// 	url:"../404/404"
				// })
			}
		}
	}
</script>

<style lang="scss">
	.content{
		// background: url("../../static/home/index/bg_home.jpg");
	}
</style>
