<template>
	<div class="dashboard-editor-container">
		<el-row>
			<el-col :span="8">
				<div class="chart-wrapper">
					<raddar-chart />
				</div>
			</el-col>
			<el-col :span="8">
				<div class="chart-wrapper">
					<pie-chart />
				</div>
			</el-col>
			<el-col :span="8">
				<div class="chart-wrapper">
					<bar-chart />
				</div>
			</el-col>
		</el-row>
		<el-row>
			<div class="c-wrapper">
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

						</el-table>
					</el-tab-pane>
				</el-tabs>
			</div>

		</el-row>
		<el-row>
			<el-col :span="6">
				<div class="d-wrapper">
				</div>
			</el-col>
			<el-col :span="6">
				<div class="d-wrapper">
				</div>
			</el-col>
			<el-col :span="6">
				<div class="d-wrapper">
				</div>
			</el-col>
			<el-col :span="6">
				<div class="d-wrapper">
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import RaddarChart from './admin/components/RaddarChart'
	import PieChart from './admin/components/PieChart'
	import BarChart from './admin/components/BarChart'

	const lineChartData = {
		newVisitis: {
			expectedData: [100, 120, 161, 134, 105, 160, 165],
			actualData: [120, 82, 91, 154, 162, 140, 145]
		},
		messages: {
			expectedData: [200, 192, 120, 144, 160, 130, 140],
			actualData: [180, 160, 151, 106, 145, 150, 130]
		},
		purchases: {
			expectedData: [80, 100, 121, 104, 105, 90, 100],
			actualData: [120, 90, 100, 138, 142, 130, 130]
		},
		shoppings: {
			expectedData: [130, 140, 141, 142, 145, 150, 160],
			actualData: [120, 82, 91, 154, 162, 140, 130]
		}
	}

	export default {
		name: 'DashboardAdmin',
		components: {
			RaddarChart,
			PieChart,
			BarChart,
		},
		data() {
			return {

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
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.dashboard-editor-container {
		padding: 32px;
		background-color: rgb(240, 242, 245);
		position: relative;

		.github-corner {
			position: absolute;
			top: 0px;
			border: 0;
			right: 0;
		}

		.chart-wrapper {
			background: #fff;
			margin: 15px;
			margin-bottom: 32px;
			padding: 10px;
		}

		.d-wrapper {
			background: #fff;
			margin: 15px;
			margin-bottom: 32px;
			padding: 10px;
			height: 300px;
		}

		.c-wrapper {
			padding: 15px;
		}
	}
</style>
