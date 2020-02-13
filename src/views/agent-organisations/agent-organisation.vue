// 中介机构
<template>
  <div class="app-container comment-style user-enroll intermediary-organisation">
    <el-row class="enroll-wrapper">
      <!-- <el-row class="enroll-nav">
        <span>首页</span>
        <span>></span>
        <span>中介机构</span>
      </el-row> -->
      <el-row class="enroll-centent">
        <!-- 标题块 -->
        <el-row class="title-cart">
          <el-tabs v-model="activeName" type="border-card" class="cart-wrapper" @tab-click="handleClick">
            <el-tab-pane label="入驻机构" name="first">
              <organization-enter />
            </el-tab-pane>
            <el-tab-pane label="入驻服务" name="second">
              <service-enter />
            </el-tab-pane>
            <el-tab-pane label="入驻公示" name="third">
              <put-enter />
            </el-tab-pane>
            <el-tab-pane label="严重失信名单" name="fourth">
              <promise-list />
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import '../../styles/comment.scss'
// import '../assets/style/enroll.scss'
import OrganizationEnter from './organization-enter'
import ServiceEnter from './service-enter'
import PutEnter from './put-enter'
import PromiseList from './promise-list'

export default {
  components: {
    OrganizationEnter,
    ServiceEnter,
    PutEnter,
    PromiseList
  },
  data() {
    return {
      activeName: 'first',

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

      checked: false

    }
  },

  watch: {
    $router(to, from) {
      // this.activeName = to.path
    }
  },

  mounted() {
    // this.$router.push({
    //     path: '/agent/organizationEnter'
    // })
  },

  methods: {

    handleClick(val) {
      // console.log(val.name, 'val.name;')
      // this.$router.push({
      //   path: val.name
      // })
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">

</style>
