<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="web-title">按钮</div>

    <div class="web-sub-title">基础用法</div>
    <yu-button>默认按钮</yu-button>
    <yu-button type="primary">主要按钮</yu-button>
    <yu-button type="success">成功按钮</yu-button>
    <yu-button type="warning">警告按钮</yu-button>
    <yu-button type="danger">危险按钮</yu-button>
    <yu-button type="info">信息按钮</yu-button>
    <br/>
    <yu-button plain>朴素按钮</yu-button>
    <yu-button type="primary" plain>主要按钮</yu-button>
    <yu-button type="success" plain>成功按钮</yu-button>
    <yu-button type="warning" plain>警告按钮</yu-button>
    <yu-button type="danger" plain>危险按钮</yu-button>
    <yu-button type="info" plain>信息按钮</yu-button>

    <div class="web-sub-title">图标按钮</div>
    <yu-button type="primary"><i class="iconfont icon-user"></i></yu-button>
    <yu-button type="primary"><i class="iconfont icon-trash"></i></yu-button>
    <yu-button type="primary"><i class="iconfont icon-edit"></i></yu-button>
    <yu-button type="primary"><i class="iconfont icon-search-o"></i>搜索</yu-button>
    <yu-button type="primary"><i class="iconfont icon-search-o"></i>搜索</yu-button>
    <yu-button type="primary"><i class="iconfont icon-upload"></i>上传</yu-button>

    <div class="web-sub-title">按钮组</div>
    <yu-button-group>
      <yu-button type="primary">
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button type="primary">
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-button-group>
    <yu-button-group>
      <yu-button>
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button>
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-button-group>
    <yu-button-group>
      <yu-button plain>
        <i class="iconfont icon-angle-left"></i>
        上一页
      </yu-button>
      <yu-button plain>
        下一页
        <i class="iconfont icon-angle-right"></i>
      </yu-button>
    </yu-button-group>
    <yu-button-group>
      <yu-button>
        1
      </yu-button>
      <yu-button>
        2
      </yu-button>
      <yu-button>
        3
      </yu-button>
      <yu-button>
        4
      </yu-button>
    </yu-button-group>
    <yu-button-group>
      <yu-button type="primary"><i class="iconfont icon-user"></i></yu-button>
      <yu-button type="primary"><i class="iconfont icon-trash"></i></yu-button>
      <yu-button type="primary"><i class="iconfont icon-edit"></i></yu-button>
    </yu-button-group>


    <div class="web-sub-title">禁用状态</div>
    <yu-button disabled>默认按钮</yu-button>
    <yu-button type="primary" disabled>主要按钮</yu-button>
    <yu-button type="success" disabled>成功按钮</yu-button>
    <yu-button type="warning" disabled>警告按钮</yu-button>
    <yu-button type="danger" disabled>危险按钮</yu-button>
    <yu-button type="info" disabled>信息按钮</yu-button>
    <br/>
    <yu-button plain disabled>朴素按钮</yu-button>
    <yu-button type="primary" plain disabled>主要按钮</yu-button>
    <yu-button type="success" plain disabled>成功按钮</yu-button>
    <yu-button type="warning" plain disabled>警告按钮</yu-button>
    <yu-button type="danger" plain disabled>危险按钮</yu-button>
    <yu-button type="info" plain disabled>信息按钮</yu-button>

    <div class="web-sub-title">不同尺寸</div>
    <yu-button type="primary" size="large">large</yu-button>
    <yu-button type="primary">normal</yu-button>
    <yu-button type="primary" size="small">small</yu-button>

    <div class="web-sub-title">圆形按钮</div>
    <yu-button circle size="large">圆</yu-button>
    <yu-button circle>圆</yu-button>
    <yu-button circle size="small">圆</yu-button>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button'
import YuButtonGroup from '../components/button-group'

export default {
  methods: {},
  components: {
    YuButton,
    YuButtonGroup,
  },
}
</script>
