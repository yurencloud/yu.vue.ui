<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="web-title">单选框</div>

    <div class="web-sub-title">基础选项</div>
    <yu-radios v-model="value1">
      <yu-radio checked label="1">苹果</yu-radio>
      <yu-radio label="2">香蕉</yu-radio>
      <yu-radio label="3">桃子</yu-radio>
    </yu-radios>
    <div class="web-sub-title">禁用选项</div>
    <yu-radio checked disabled v-model="value2">桔子</yu-radio>
    <yu-radio disabled v-model="value2">桔子</yu-radio>
    <div class="web-sub-title">垂直方向</div>
    <yu-radios vertical v-model="value3">
      <yu-radio checked label="1">苹果</yu-radio>
      <yu-radio label="2">香蕉</yu-radio>
      <yu-radio label="3">桃子</yu-radio>
    </yu-radios>

    <div class="web-sub-title">可以单独使用，返回true/false</div>
    <yu-radio v-model="value4">手机</yu-radio>
    <yu-radio v-model="value5">电脑</yu-radio>

    <div class="web-sub-title">v-model</div>
    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>


    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button'
import YuButtonGroup from '../components/button-group'
import YuRadio from '../components/radio'
import YuRadios from '../components/radios'

export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
    }
  },
  components: {
    YuButton,
    YuButtonGroup,
    YuRadio,
    YuRadios,
  },
}
</script>

