<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="web-title">多选框</div>

    <div class="web-sub-title">基础选项</div>
    <yu-checkboxs v-model="value1">
      <yu-checkbox  checked label="1">苹果</yu-checkbox>
      <yu-checkbox  label="2">西瓜</yu-checkbox>
      <yu-checkbox  label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="web-sub-title">基础选项</div>
    <yu-checkboxs v-model="value2" showControl>
      <yu-checkbox  checked label="1">苹果</yu-checkbox>
      <yu-checkbox  label="2">西瓜</yu-checkbox>
      <yu-checkbox  label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="web-sub-title">禁用状态</div>
    <yu-checkbox  checked label="1" disabled>苹果</yu-checkbox>
    <yu-checkbox  label="2" disabled>香蕉</yu-checkbox>

    <div class="web-sub-title">垂直方向</div>
    <yu-checkboxs v-model="value3">
      <yu-checkbox  vertical checked label="1">苹果</yu-checkbox>
      <yu-checkbox  vertical label="2">西瓜</yu-checkbox>
      <yu-checkbox  vertical label="3">桃子</yu-checkbox>
    </yu-checkboxs>

    <div class="web-sub-title">作为单选,返回 true/false</div>
    <yu-checkbox label="3" v-model="value6">桃子</yu-checkbox>

    <div class="web-sub-title">v-model</div>

    <div>{{value1}}</div>
    <div>{{value2}}</div>
    <div>{{value3}}</div>
    <div>{{value4}}</div>
    <div>{{value5}}</div>
    <div>{{value6}}</div>
  </div>
</template>
<script>
import YuButton from '../components/button'
import YuButtonGroup from '../components/button-group'
import YuCheckbox from '../components/checkbox'
import YuCheckboxs from '../components/checkboxs'

export default {
  data() {
    return {
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
      value6: false,
    }
  },
  components: {
    YuButton,
    YuButtonGroup,
    YuCheckbox,
    YuCheckboxs,
  },
}
</script>
