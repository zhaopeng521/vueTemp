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
          <el-col :span="12">
            <el-form-item label="等级：">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="综合评价：">
              <el-select v-model="form.regions" placeholder="请选择评价">
                <el-option label="5分" value="shanghai" />
                <el-option label="4-4.9分" value="beijing" />
                <el-option label="3-3.9分" value="beijing" />
                <el-option label="2-2.9分" value="beijing" />
                <el-option label="1-1.9分" value="beijing" />
                <el-option label="0-0.9分" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="服务类型：">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type" />
                <el-checkbox label="地推活动" name="type" />
                <el-checkbox label="线下主题活动" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
              </el-checkbox-group>
            </el-form-item>
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
          label="	服务信息"
          align="center"
        />
        <el-table-column
          prop="value"
          label="星级评价"
          align="center"
        >
          <template slot-scope="scope">
            <el-rate
              v-model="scope.row.value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            />
          </template>
        </el-table-column>
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
        address: '',
        regions: ''
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
