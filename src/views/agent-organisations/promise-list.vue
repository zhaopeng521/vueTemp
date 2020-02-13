<template>
  <div class="origin-enter">
    <el-row>
      <el-form ref="form" :model="form" label-width="150px">
        <el-row>
          <el-col :span="22">
            <el-form-item label="中介服务机构名称：">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button style="float:right;" type="primary" @click="onSubmit">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{background:'#f5f5f5'}"
      >
        <el-table-column
          prop="name"
          label="中介服务机构名称"
          align="center"
        />
        <el-table-column
          prop="address"
          label="	严重失信行为原因"
          align="center"
        />
        <el-table-column
          prop="date"
          label="	严重失信行为期限"
          align="center"
        />
        <el-table-column
          prop="date"
          label="	更新时间"
          align="center"
        />
      </el-table>
    </el-row>
    <el-row class="table-pagesize">
      <el-col :span="6">
        <span class="now-page"> 共{{ totalSize }}条记录第 {{ currentPage }}/41 页</span>
      </el-col>
      <el-col class="total-page" :span="18">
        <el-pagination
          background
          :current-page="currentPage"
          layout="prev, pager, next, jumper"
          :page-size="pageSize"
          :total="totalSize"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        address: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        value: 3.7
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        value: 2.7
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        value: 4.7
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        value: 5.0
      }],
      options: [{
        value: 'zhongguo',
        label: '中国',
        children: [{
          value: 'sahnghai',
          label: '上海',
          children: [{
            value: 'hongkou',
            label: '虹口区'
          }]
        }, {
          value: 'anhui',
          label: '安徽',
          children: [{
            value: 'hefei',
            label: '合肥市'
          }]
        }, {
          value: 'henan',
          label: '河南',
          children: [{
            value: 'zhengzhou',
            label: '郑州'
          }]
        }]
      }],
      totalSize: 110, // 总条数
      currentPage: 2, // 当前页
      pageSize: 10 // 每条展示条数
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!')
    },

    handleChange(value) {
      console.log(value)
    },

    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped lang="scss">

</style>
