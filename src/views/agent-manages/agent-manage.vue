// 中介管理
<template>
  <div class="app-container user-enroll agent-manage">
    <!-- 新增加员工信息 -->
    <el-dialog title="新增员工信息" width="1000px" :visible.sync="addUserDig">
      <el-form ref="addUserForm" :model="addUserForm" :rules="rules" label-width="100px">
        <el-col :span="12">
          <el-form-item label="员工姓名：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别：">
            <el-select v-model="addUserForm.name" placeholder="请选择活动区域">
              <el-option label="男" value="shanghai" />
              <el-option label="女" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="籍贯：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学历：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所学专业：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职务：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职称：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="资格证：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="专职兼职：">
            <el-select v-model="addUserForm.name" placeholder="请选择活动区域">
              <el-option label="专职" value="shanghai" />
              <el-option label="全职" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否在职：">
            <el-select v-model="addUserForm.name" placeholder="请选择活动区域">
              <el-option label="是" value="shanghai" />
              <el-option label="否" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="专业绩效：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="备注：">
            <el-input v-model="addUserForm.name" type="textarea" :autosize="{ minRows: 2, maxRows: 5}" />
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserDig = false">取 消</el-button>
        <el-button type="primary" @click="addUserDig = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 新增资质信息  -->
    <el-dialog title="新增资质信息" width="1000px" :visible.sync="addAptitudeDig">
      <el-form ref="addUserForm" :model="addUserForm" :rules="rules" label-width="120px">
        <el-col :span="12">
          <el-form-item label="资质证书编号：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="资质证书名：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授权等级：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申报备案地：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发证日期：">
            <el-date-picker
              v-model="addUserForm.name"
              type="date"
              placeholder="发证日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有效日期至：">
            <el-date-picker
              v-model="addUserForm.name"
              type="date"
              placeholder="有效日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="资质认定机关：">
            <el-input v-model="addUserForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="资质文件上传：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="mini" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip" style="display: inline;margin-left: 20px;">这里是对文件上传的提示</div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addAptitudeDig = false">取 消</el-button>
        <el-button type="primary" @click="addAptitudeDig = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-row class="enroll-wrapper">
      <div class="edit-msg">
        <el-button type="primary" @click="msgMaintain">信息维护</el-button>
        <el-button type="primary" @click="ouApplyBtn">下架申请</el-button>
      </div>
      <el-form ref="enrollForm" :model="enrollForm" :disabled="maintainDisabled" :rules="rules" label-width="160px">
        <!-- <el-row class="enroll-nav">
          <span>首页</span>
          <span>></span>
          <span>中介管理</span>
        </el-row> -->
        <el-row class="enroll-centent">
          <!-- 标题块 -->
          <el-row class="centent-title">
            <span class="base-title">基本信息</span>
          </el-row>
          <!-- 内容块 -->
          <el-row class="centent-wrapper">
            <el-row class="centent-from">
              <el-row :span="24">
                <!-- <el-col :span='24'>
                    <el-form-item label="驻地信息 (可多选）："  prop="serviceRegion">
                      <el-checkbox-group v-model="enrollForm.serviceRegion">
                        <el-checkbox v-for="(item,index) in serviceRegionData" :key="index" :label="item.addres" :name="item.codes"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col> -->
                <el-col :span="12">
                  <el-form-item label="单位名称：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="审核状态：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="注册地点：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="统一信用代码：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="法定代表人：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="法定代表人身份证：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="联系人：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="联系人手机：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="联系人身份证：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="注册资金：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位经营地址：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位类别：" prop="creditCode">
                    <el-select v-model="enrollForm.creditCode" placeholder="请选择单位类别">
                      <el-option label="区域一" value="shanghai" />
                      <el-option label="区域二" value="beijing" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
          </el-row>

          <!-- 标题块 -->
          <el-row class="centent-title">
            <span class="base-title">员工信息</span>
          </el-row>
          <el-row>
            <el-button style="float: right;" type="primary" @click="addUserDig=true">新建员工信息</el-button>
          </el-row>
          <!-- 内容块 -->
          <el-row class="centent-wrapper">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              :header-cell-style="{background:'#f5f5f5'}"
            >
              <el-table-column
                prop="name"
                label="员工姓名"
                align="center"
              />
              <el-table-column
                prop="address"
                label="	学历"
                align="center"
              />
              <el-table-column
                prop="name"
                label="职务"
                align="center"
              />
              <el-table-column
                prop="name"
                label="职称"
                align="center"
              />
              <el-table-column
                label="操作"
                width="160"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="addUserDig=true">编辑</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>

          <!-- 标题块 -->
          <el-row class="centent-title">
            <span class="base-title">驻地信息</span>
          </el-row>
          <!-- 内容块 -->
          <el-row class="centent-wrapper">
            <el-row class="centent-from">
              <el-row :span="24">
                <el-col :span="12">
                  <el-form-item label="地址：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="办公面积：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="办公电话：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="负责人姓名：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="负责人手机号码：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="负责人qq：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="联系人：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="传真号码：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="职工人数：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="注册资金：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="审核状态：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
          </el-row>
          <!-- 标题块 -->
          <el-row class="centent-title">
            <span class="base-title">资质信息</span>
          </el-row>
          <el-row>
            <el-button style="float: right;" type="primary" @click="addAptitudeDig=true">新建资质信息</el-button>
          </el-row>
          <!-- 内容块 -->
          <el-row class="centent-wrapper">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              :header-cell-style="{background:'#f5f5f5'}"
            >
              <el-table-column
                prop="name"
                label="资质名称"
                align="center"
              />
              <el-table-column
                prop="address"
                label="	资质编号"
                align="center"
              />
              <el-table-column
                prop="name"
                label="资质等级"
                align="center"
              />
              <el-table-column
                prop="name"
                label="资质记录时效"
                align="center"
              />
              <el-table-column
                prop="name"
                label="资质有效时间"
                align="center"
              />
              <el-table-column
                label="操作"
                width="160"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="addAptitudeDig=true">编辑</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>

          <!-- 标题块 -->
          <el-row class="centent-title">
            <span class="base-title">详细信息</span>
          </el-row>
          <!-- 内容块 -->
          <el-row class="centent-wrapper">
            <el-row class="centent-from">
              <el-row :span="24">
                <el-col :span="24">
                  <el-form-item label="单位简介：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" type="textarea" :autosize="{ minRows: 2, maxRows: 8}" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="单位检查制度：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" type="textarea" :autosize="{ minRows: 2, maxRows: 8}" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="行业情况：" prop="creditCode">
                    <el-input v-model="enrollForm.creditCode" type="textarea" :autosize="{ minRows: 2, maxRows: 8}" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <div class="submit-wrapper">
                    <p><el-checkbox v-model="checked">我已经阅读并同意</el-checkbox></p>
                    <p><el-button type="primary" @click="submit('enrollForm')">确定</el-button></p>
                  </div>
                </el-col>
              </el-row>
            </el-row>
          </el-row>

        </el-row>
      </el-form>
    </el-row>
  </div>
</template>

<script>
// import '../assets/style/enroll.scss'

export default {
  data() {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      addUserDig: false, // 新增员工信息弹框
      addAptitudeDig: false, // 新增员工信息弹框
      maintainDisabled: true, // 表格禁用

      addUserForm: {
        name: ''
      }, // 新增用户信息

      enrollForm: {
        unitName: '', // 单位登记所在地
        approvePreposition: '', // 是否涉及审批前置
        representativeLocation: '', // 法定代表人所在地
        representativeSex: '', // 法定代表人性别
        representativeType: '', // 法人类型
        representativeNation: '', // 法定代表人民族
        creditCode: '', // 企业工商注册号/统一社会信用代码
        enterpriseName: '', // 企业名称
        IntermediaryName: '', // 中介机构名称
        messageCode: '', // 统一信息代码
        serviceRegion: [], // 服务地区
        representativeUser: '', // 法定代表人
        identityCard: '', // 法定代表人身份证
        linkmanName: '', // 联系人姓名
        linkmanCard: '', // 联系人身份证
        linkmanPhone: '', // 联系人手机号
        enrollMoney: '', // 注册资金（单位万元）
        unitAddress: '', // 单位地址
        linkmanFaxes: '', // 联系人传真
        linkmanTel: '', // 联系人电话
        linkmanEmail: '', // 电子邮箱
        unitType: '', // 单位性质
        verificationCode: '' // 验证码

        // name: '',
        // region: '',
        // date1: '',
        // date2: '',
        // delivery: false,
        // type: [],
        // resource: '',
        // desc: ''
      },

      // 法定代表人数据
      serviceRegionData: [
        {
          addres: '北京',
          codes: '1'
        }, {
          addres: '上海',
          codes: '2'
        }, {
          addres: '深圳',
          codes: '3'
        }, {
          addres: '天津',
          codes: '4'
        }, {
          addres: '重庆',
          codes: '5'
        }, {
          addres: '西宁',
          codes: '6'
        }, {
          addres: '其它',
          codes: '7'
        }
      ],

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

      checked: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },

  mounted() {

  },

  methods: {

    // 下架申请
    ouApplyBtn() {
      this.$confirm('是否申请中介机构下架？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '下架成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消下架'
        })
      })
    },

    // 信息维护
    msgMaintain() {
      this.maintainDisabled = false
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push({
          //   path: "/IntermediaryOrganisation",
          // });
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
