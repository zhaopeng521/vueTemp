<template>
	<div>
		<!-- <img :src="imgUrl" alt style="z-index:1;width:100%;height:100%"> -->
		<div>
			<el-button type="primary" @click="toImage">抓拍</el-button>
			<div class="imageWrapper" ref="imageWrapper">
				<video id="myVideo" src="../../v/vv.mp4" width="320" height="240" poster="../../v/vv.mp4" controls>
					Your browser does not support the video tag.
				</video>
				<div>111117777777</div>
				<slot></slot>
			</div>
		</div>
		<div>
			<img class="real_pic11" :src="dataURL" />
			<canvas></canvas>
			<a id='alink'>下载</a>
		</div>

	</div>
</template>

<script>
	import html2canvas from 'html2canvas';
	export default {
		data() {
			return {
				dataURL: '',
			};
		},
		mounted() {
		},
		methods: {
			toImage() {
				var canvas = document.querySelectorAll('canvas')[0];
				var video = document.querySelectorAll('video')[0];

				var ctx = canvas.getContext('2d');
				var width = video.width;
				var height = video.height;
				canvas.width = width;
				canvas.height = height;
				ctx.drawImage(video, 0, 0, width, height); // 将video中的数据绘制到canvas里
				let fil = canvas.toDataURL('image/png');
				this.dataURL = fil;
				this.downloadFile('333.png',fil)

				// 			 html2canvas(img, { canvas: canvas }).then(function(canvas) {//这是html转canvas 截图
				//              _this.photoUrl = canvas.toDataURL()
				//       });
				// 				html2canvas(this.$refs.imageWrapper,{
				// 						backgroundColor: null
				// 				}).then((canvas) => {
				// 					console.log(canvas,'4444')
				// 						let dataURL = canvas.toDataURL("image/png");
				// 						this.dataURL = dataURL;
				// 						console.log(dataURL,'55')
				// 				});
			},
			downloadFile(fileName, content) {
				// var aLink = document.createElement('a');
				var aLink = document.getElementById("alink");
				var blob = new Blob([content]);
				aLink.download = fileName;
				aLink.href = content;
				aLink.click();
			},
			
			
		}
	};
</script>
