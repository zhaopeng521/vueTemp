<template>
	<div class="app-container">
		<el-tabs type="border-card">
			<el-tab-pane label="受理">
				<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
					<el-table-column align="center" prop="date" label="日期">
					</el-table-column>
					<el-table-column align="center" prop="name" label="项目名称">
					</el-table-column>
					<el-table-column align="center" prop="address" show-overflow-tooltip label="涉及的行政事项">
					</el-table-column>
					<el-table-column align="center" prop="address" show-overflow-tooltip label="中介服务事项对应部门">
					</el-table-column>
					<el-table-column align="center" prop="address" label="发布时间">
					</el-table-column>
					<el-table-column align="center" prop="address" label="办理时限">
					</el-table-column>
					<el-table-column align="center" prop="address" label="受理状态">
					</el-table-column>
					<el-table-column align="center" label="操作" width="100">
						<template slot-scope="scope">
							<el-button @click="handle(scope.row)" type="text" size="small">受理</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="办结">
				<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
					<el-table-column align="center" prop="date" label="日期">
					</el-table-column>
					<el-table-column align="center" prop="name" label="姓名">
					</el-table-column>
					<el-table-column align="center" prop="address" label="地址111">
					</el-table-column>
					<el-table-column align="center" label="操作" width="100">
						<template slot-scope="scope">
							<el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
		<div>
			<el-dialog title="项目详情" center :visible.sync="dialogVisible" width="60%">
				<el-tabs type="border-card">
					<el-tab-pane label="项目基本信息">
						<div class="table-lab">
							<i></i>
							<span class="lab">基本信息</span>
						</div>
						<div class="purchaseTable">
							<table>
								<tbody>
									<tr>
										<td class="head-th">项目名称：</td>
										<td colspan="3"><span style="display: inline-block;width: 100%;">测试项目</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">项目建设地点：</td>
										<td colspan="3"><span style="display: inline-block;width: 100%;" class="ellipsis-text"></span>
										</td>
									</tr>
									<tr>
										<td class="head-th">项目详细建设地点：</td>
										<td colspan="3"><span style="display: inline-block;width: 100%;" class="ellipsis-text">西宁</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">项目申报时间：</td>
										<td><span style="display: inline-block;width: 100%;" class="ellipsis-text">2019-12-28</span>
										</td>
										<td class="head-th">审核类型：</td>
										<td>
											<span>
												<span style="display: inline-block;width: 100%;" class="ellipsis-text">审批类型</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">国标行业：</td>
										<td><span style="display: inline-block;width: 100%;" class="ellipsis-text">稻谷种植</span>
										</td>
										<td class="head-th">项目赋码机构：</td>
										<td><span style="display: inline-block;width: 100%;" class="ellipsis-text">省工业和信息化厅</span></td>
									</tr>
									<tr>
										<td class="head-th">项目所属行业：</td>
										<td><span style="display: inline-block;width: 100%;" class="ellipsis-text">社会事业</span></td>
										<td class="head-th">建设性质：</td>
										<td>
											<span>
												<span style="display: inline-block;width: 100%;" class="ellipsis-text">新建</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">行业二级目录：</td>
										<td colspan="3">
											<span style="display: inline-block;width: 100%;" class="ellipsis-text">测试22</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">产业结构调整指导目录：</td>
										<td colspan="3">
											<span style="display: inline-block;width: 100%;" class="ellipsis-text">150万平方米/年及以下的建筑陶瓷生产线</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">建设内容及规模：</td>
										<td colspan="3">
											<div>111</div>
										</td>
									</tr>
									<tr>
										<td class="head-th">拟开工时间：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">2019</em>
										</td>
										<td class="head-th">拟建成时间：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">2020</em>
										</td>
									</tr>
									<tr>
										<td class="head-th">项目总投资（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em></td>

										<td class="head-th">引进用汇（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em>
										</td>
									</tr>
									<tr>
										<td class="head-th">自有资金（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em>
										</td>
										<td class="head-th">政府投资（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em>
										</td>
									</tr>
									<tr>
										<td class="head-th">银行贷款（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em></td>

										<td class="head-th">其他（万元）：</td>
										<td><em style="display: inline-block;width: 100%;" class="ellipsis-text">5000</em>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

					</el-tab-pane>
					<el-tab-pane label="项目申请个人">
						<div class="table-lab">
							<i></i>
							<span class="lab">项目申请个人</span>
						</div>
						<div class="purchaseTable">
							<table>
								<tbody>
									<tr>
										<td class="head-th">申报人姓名：</td>
										<td><span style="display: inline-block;width: 100%;">张三</span>
										</td>
										<td class="head-th">申报人身份证号码：</td>
										<td><span style="display: inline-block;width: 100%;">430404********0031</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="table-lab lab-t">
							<i></i>
							<span class="lab">经办联系人信息</span>
						</div>
						<div class="purchaseTable">
							<table>
								<tbody>
									<tr>
										<td class="head-th">申报人姓名：</td>
										<td><span style="display: inline-block;width: 100%;">张三</span>
										</td>
										<td class="head-th">申报人身份证号码：</td>
										<td><span style="display: inline-block;width: 100%;">430404********0031</span>
										</td>
									</tr>
									<tr>
										<td class="head-th">电子邮箱：：</td>
										<td><span style="display: inline-block;width: 100%;">张三</span>
										</td>
										<td class="head-th">是否主联系人：</td>
										<td><span style="display: inline-block;width: 100%;">430404********0031</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</el-tab-pane>
					<el-tab-pane label="已申请事项">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="立项用地规划许可阶段" name="first">
								<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
									<el-table-column align="center" prop="date" label="日期">
									</el-table-column>
									<el-table-column align="center" prop="name" label="姓名">
									</el-table-column>
									<el-table-column align="center" prop="address" label="地址111">
									</el-table-column>
									<el-table-column align="center" label="操作" width="100">
										<template slot-scope="scope">
											<el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="工程建设许可阶段" name="second">
								<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
									<el-table-column align="center" prop="date" label="日期">
									</el-table-column>
									<el-table-column align="center" prop="name" label="姓名">
									</el-table-column>
									<el-table-column align="center" prop="address" label="地址111">
									</el-table-column>
									<el-table-column align="center" label="操作" width="100">
										<template slot-scope="scope">
											<el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="施工许可阶段" name="third">
								<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
									<el-table-column align="center" prop="date" label="日期">
									</el-table-column>
									<el-table-column align="center" prop="name" label="姓名">
									</el-table-column>
									<el-table-column align="center" prop="address" label="地址111">
									</el-table-column>
									<el-table-column align="center" label="操作" width="100">
										<template slot-scope="scope">
											<el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="竣工验收阶段" name="fourth">
								<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#f5f5f5'}">
									<el-table-column align="center" prop="date" label="日期">
									</el-table-column>
									<el-table-column align="center" prop="name" label="姓名">
									</el-table-column>
									<el-table-column align="center" prop="address" label="地址111">
									</el-table-column>
									<el-table-column align="center" label="操作" width="100">
										<template slot-scope="scope">
											<el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
						</el-tabs>
					</el-tab-pane>
				</el-tabs>

			</el-dialog>
		</div>
	</div>
</template>

<script>
	import {
		selectType
	} from '@/api/qiniu.js';
	export default {
		data() {
			return {
				activeName: 'second',
				dialogVisible: false,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
			}
		},
		mounted() {
			this.test()
		},
		methods: {
			showCreatedTimes() {
				this.createdTimes = this.createdTimes + 1
			},
			handle(item) {
				this.dialogVisible = true
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			test() {
				let pd = {
					"typeName": ""
				}
				selectType(pd).then(res => {
					console.log(res, 'dddd')
				});
			}
		}
	}
</script>

<style scoped>

</style>
