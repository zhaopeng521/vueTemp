git<template>
  <div class="app-container origin-enter public-agent">
    <el-row>
      <!-- <div @click="surceTabChange" :class="{active:active==index}">
      </div> -->
      <div class="tab-click">
        <ul>
          <li v-for="(item,index) in tabLisData" :key="index" @click="tabChange(item,index)" :class="{active:active==index}">{{item.tabName}}</li>
        </ul>
      </div>
      <el-form ref="form" :model="form" label-width="150px">
        <el-row>
          <el-col :span="22">
            <el-form-item label="项目名称：">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button style="float:right;" type="primary" @click="onSubmit">查询</el-button>
          </el-col>
          <el-col v-if="active == '1'" :span='24'>
            <el-col :span="12">
              <el-form-item label="黑红名单：">
                <el-select v-model="form.region" placeholder="请选择黑红名单">
                  <el-option label="黑名单" value="shanghai" />
                  <el-option label="白名单" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="企业信用状态：">
                <el-select v-model="form.region" placeholder="请选择黑红名单">
                  <el-option label="守信" value="0" />
                  <el-option label="失信" value="1" />
                  <el-option label="正常" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
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
          label="	机构类型"
          align="center"
        />
        <el-table-column
          prop="name"
          label="服务类型"
          align="center"
        />
        <el-table-column
          prop="name"
          label="	归属地"
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
        <el-table-column
          prop="name"
          label="	一般失信行为"
          align="center"
        />
        <el-table-column
          prop="value"
          label="操作"
          width='120px'
          align="center"
        >
          <template slot-scope="scope">
             <el-button type="primary" size="mini">详情</el-button>
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
      active: '0',
      tabLisData: [
        {
          tabName: '中介信息公示',
          tabIndex: '0'
        },{
          tabName: '中介信用公示',
          tabIndex: '1'
        },{
          tabName: '中介办件公示',
          tabIndex: '2'
        },{
          tabName: '失信名单公示',
          tabIndex: '3'
        }
      ],
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
  mounted() {
    
  },
  methods: {

    tabChange(val,index) {
      this.active = index;
      // console.log(val,index,'val,index')
    },

    onSubmit() {
      console.log('submit!')
      this.$router.push({
        path: '/AgentManege'
      })
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
