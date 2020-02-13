<template>
	<div>
		<div class="content content-time">
			<div class="time-login">
				<div class="time-show">{{ nowData }} <span>{{ nowWeek == '0' ? '星期日'  : owWeek == '1' ? '星期一' : owWeek == '2' ? '星期二' : owWeek == '3' ? '星期三' : owWeek == '4' ? '星期四' : owWeek == '5' ? '星期五' : owWeek == '6' ? '星期六' : '' }}</span> </div>
				<div onclick="window.open('https://www.gov.cn/','_blank')" class="logo-title">中国政府网</div>
				<div onclick="window.open('http://www.qh.gov.cn/','_blank')" class="logo-title">青海省人民政府网</div>
				<div onclick="window.open('http://fgw.qinghai.gov.cn/','_blank')" class="logo-title">青海省发改委</div>
				<div class="login-btn">
					<div>
						<span class="login-text">登录</span>
						<ul class="user-login">
							<li onclick="window.open('http://61.133.232.23:8088/oaip-portal/login?userType=10','_self')">
								<i class="login-icon"></i>
								个人用户登录
							</li>
							<li onclick="window.open('http://61.133.232.23:8088/oaip-portal/login?userType=20','_self')">
								<i class="login-icon2"></i>
								项目单位法人登录
							</li>
						</ul>
					</div>
					<span class="login-inline">|</span>
					<div onclick="window.open('http://61.133.232.23:8088/oaip-portal/register','_self')" class="add-text">注册</div>
				</div>
			</div>
		</div>
		<!-- <div class="content content-time">
			<div class="time-login">
				<div class="time-show">
				</div>
				<ul class="head-net">
					<li onclick="window.open('https://www.gov.cn/','_blank')">中国政府网</li>
					<li onclick="window.open('http://www.qh.gov.cn/','_blank')">青海省人民政府网</li>
					<li onclick="window.open('http://fgw.qinghai.gov.cn/','_blank')">青海省发改委</li>
				</ul>
				<div class="login-not">
					<ul>
						<li class="first-list login-li">
							<div class="drop_down_hover">
								<div class="drop_div_hover">
									<span>登录</span>
								</div>
								<ul class="down_div_hover">
									<li>
										<i class="login-i2"></i>
										<span onclick="window.open('http://61.133.232.23:8088/oaip-portal/login?userType=10','_self')">个人用户登录</span>
									</li>
									<li>
										<i class="login-i1"></i>
										<span onclick="window.open('http://61.133.232.23:808/oaip-portal/login?userType=20','_self')">项目单位法人登录</span>
									</li>
								</ul>
							</div>
						</li>
						<li onclick="window.open('http://61.133.232.23:8088/oaip-portal/register','_self')" class="login-li">注册</li>
					</ul>
				</div>
			</div>
		</div> -->
		<div class="content content-logo">
			<div class="logo-top">
				<div class="logo">
					<img src="http://61.133.232.23:8088/oaip-portal/dist/img/title-icon.png" class="head-logo">
					<div class="h1">青海省投资项目在线审批监管平台</div>
					<div class="button-enter" onclick="window.open('http://www.tzxm.gov.cn/', '_blank')">
						国家平台入口
					</div>
					<img src="http://61.133.232.23:8088/oaip-portal/dist/img/qinghai-icon.png" class="qinghai-icon">
				</div>
				<!-- <i class="qinghai-icon"></i> -->
			</div>
		</div>
		<div class="content content-nav">
			<div class="h-nav">
				<el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect" background-color="#1a5284"
				 text-color="#fff" active-text-color="#ffd04b">
					<template v-for="(items,j) in menuData">
						<template v-if="!items.children.length">
							<el-menu-item :index="items.link">{{items.name}}</el-menu-item>
						</template>
						<template v-if="items.children.length">
							<el-submenu :index="items.link">
								<!-- <template slot="title"><span @click="toR(items.link)">{{items.name}}</span></template> -->
								<template slot="title">{{items.name}}</template>
								<el-menu-item v-for="(cItem,i) in items.children" :key="i" :index="cItem.link">{{cItem.name}}</el-menu-item>
							</el-submenu>
						</template>
					</template>

				</el-menu>
			</div>

		</div>

	</div>
</template>

<script>
	import {
		menuData
	} from './menu.js'
	export default {
		data() {
			return {
				activeIndex: '/dashboard',
				menuData: [],
				nowData: (new Date()).getFullYear() + '年' + ((new Date()).getMonth() + 1) + '月' + (new Date()) .getDate() + '日',
				nowWeek: (new Date()).getDay(),
			};
		},
		computed: {},
		watch: {
			$route(to, from) {
				this.activeIndex = to.path;
			}
		},
		mounted() {
			this.menuData = menuData;
			this.activeIndex = this.$route.path || '/dashboard';
			this.getTime()
		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			},
			getTime() {
				let date = new Date();
				// this.nowData = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date .getDate() + '日';
				// console.log(guala,'guala')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-logo {
		background: #fff;
	}
	.content-time{
		line-height: 33px;
		background: linear-gradient(180deg,rgba(248,248,248,1) 0%,rgba(230,230,230,1) 100%);
		.time-login{
			position: relative;
			line-height: 33px;
			font-size: 14px;
			color: #999999;
			// margin-left: 10px;
			width: 1200px;
			display: flex;
			.time-show{
				font-size: 12px;
				color: #666666;
				margin-right: 10px; 
			}
			.login-btn{
				display: inherit;
				position: absolute;
				right: 0;
				div {
					font-size: 16px;
					color: #666;
					position: relative;
					cursor: pointer;
					&:hover .user-login{
						display: block !important;
					}
					.login-text{
						margin-right: 20px;
						// cursor: pointer;
					}
					.user-login{
						padding: 0;
						margin: 0;
						position: absolute;
						width: 200px;
						left: 50%;
						margin-left: -100px;
						font-size: 16px;
						box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
						z-index: 999;
						background: #e9eaec;
						line-height: 100%;
						box-sizing: border-box;
						display: none;
						li {
							cursor: pointer;
							color: #666666;
							height: 44px;
							// text-align: center;
							line-height: 44px;
							font-size: 16px;
							display: block;
							font-weight: 400;
							&:nth-child(1) {
								&:hover .login-icon{
									background: url(../../assets/img/icon2.png);
								}
							}
							&:nth-child(2) {
								&:hover .login-icon2{
									background: url(../../assets/img/icon4.png);
								}
							}
							&:hover {
								color: #186DB7;
								background: #DDEFFF;
								font-weight: bold;
							}
							i{
								display: inline-block;
								width: 20px;
								height: 20px;
								margin-left: 10px;
								margin-top: -2px;
								vertical-align: middle;
							}
							.login-icon{
								background: url(../../assets/img/icon1.png);
							}
							.login-icon2{
								background: url(../../assets/img/icon3.png);
							}
						}
					}
				}
				.add-text{
					margin-left: 20px;
					&:hover {
						cursor: pointer;
						color: #186DB7;
					}
				}
			}
			.logo-title{
				margin-left: 10px;
    			cursor: pointer;
			}
		}
	}
	.content-nav {
		background: #1a5284;
		height: 50px;

		.h-nav {
			width: 1200px;

			.el-menu-item {
				font-size: 18px;
				padding: 0 25px;
				line-height: 50px;
				height: 50px;
			}

			.el-submenu {
				height: 50px;
			}
		}

	}

	.button-enter {
		width: 142px;
		height: 34px;
		background: #186DB7;
		color: #ffffff;
		display: inline-block;
		font-weight: 500;
		font-size: 16px;
		border-radius: 100px;
		line-height: 34px;
		text-align: center;
		cursor: pointer;
		margin-left: 30px;
		position: relative;
		z-index: 8;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	.logo-top {
		width: 1200px;
		line-height: 80px;
		position: relative;
		height: 80px;

		.logo {
			display: flex;
			align-items: center;

			.h1 {
				font-size: 32px;
				font-weight: 600;
			}
		}

		.head-logo {
			width: 41px;
			height: 44px;
			position: relative;
			top: -3px;
			margin-right: 10px;
		}

		.qinghai-icon {
			display: inline-block;
			width: 534px;
			height: 80px;
			position: absolute;
			right: 0;
			background: url(http://61.133.232.23:8088/oaip-portal/dist/img/qinghai-icon.png);
		}
	}
</style>
