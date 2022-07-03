const baseUrl = "http://127.0.0.1:3000/"
export function requestServer(config) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url,
			data: {
				text: 'uni.request'
			},
			header: {

			},
			success: (res) => {
				// console.log(res.data,"网络请求成功");
				// this.text = 'request success';
				resolve(res)
			},
			fail: (err) => {
				// console.log(err,"网络请求失败");
				reject(err)
			}
		});
	})
}
