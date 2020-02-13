<template>
  <div class="footer">
    <div class="content">
      <div class="img-l"></div>
      <div class="info">
        <div class="info-u">
          <div class="spn-1">关于本网</div>
          <div class="spn">网站声明</div>
          <div class="spn">联系我们</div>
          <div class="spn-4">网站纠错</div>
        </div>
        <div class="info-d">
          <div class="d-spn">主办单位：青海省发展和改革委员会</div>
          <div class="d-spn">备案编号：青ICP备17001418号-5</div>
          <div class="d-spn">青公网安备：63080202000119号</div>
          <div class="d-spn">推荐使用IE8或以上版本浏览器访问</div>
        </div>
      </div>
      <div class="img-rig"></div>
      <div class="code code1">
        <div class="show-code">
          <div class="big-img"></div>
          <p class="p-d">青海在线审批公众号</p>
        </div>
        <div class="code-icon"></div>
      </div>
      <div class="code code2">
        <div class="show-code">
          <div class="big-img"></div>
          <p class="p-d">青海在线审批公众号</p>
        </div>
        <div class="code-icon"></div>
      </div>
      <div class="code code3">
        <div class="show-code">
          <div class="big-img"></div>
          <p class="p-d">青海在线审批公众号</p>
        </div>
        <div class="code-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #053B76;
    height: 156px;

    .content {
      width: 1200px;
      display: flex;
      align-items: center;
    }

    .info {
      margin-left: 20px;
      height: 97px;
      font-size: 16px;
      color: #fff;

      .info-u {
        display: flex;
        height: 16px;
        line-height: 16px;

        .spn {
          width: 85px;
          text-align: center;
          border-right: 1px solid #fff;
        }

        .spn-1 {
          width: 75px;
          border-right: 1px solid #fff;
        }

        .spn-4 {
          width: 75px;
          text-align: right;
        }
      }

      .info-d {
        display: flex;
        width: 600px;
        flex-wrap: wrap;
        margin-top: 15px;

        .d-spn {
          width: 300px;
          text-align: left;
          line-height: 32px;
        }

      }
    }

    .img-l {
      width: 80px;
      height: 80px;
      background: url(http://61.133.232.23:8088/oaip-portal/dist/img/bottom-icon.png) no-repeat center;
    }

    .img-rig {
      margin-left: 80px;
      width: 148px;
      height: 68px;
      background: url(http://61.133.232.23:8088/oaip-portal/dist/img/b-r-icon.png);
    }

    .code {
      height: 54px;
      width: 54px;
      background: #fff;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      position: relative;

      .code-icon {
        height: 54px;
        width: 54px;
        background: url(http://61.133.232.23:8088/oaip-portal/dist/img/code-small.png) no-repeat center;
      }

      .show-code {
        background: #fff;
        width: 120px;
        height: 140px;
        position: absolute;
        top: -144px;
        left: -27px;
        display: none;
        text-align: center;
        z-index: 200;
        display: none;

        .p-d {
          line-height: 2px;
        }

        .big-img {
          width: 100px;
          height: 100px;
          display: inline-block;
          margin-top: 10px;
          background: url(http://61.133.232.23:8088/oaip-portal/dist/img/code-big.png) no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
    .code1 {
      margin-left: 65px;
    }

    .code2 {
      margin: 0 20px;
    }

    .code:hover {
      background: rgb(24, 109, 183);
      .show-code {
        display: block;
      }
    }
  }
</style>
