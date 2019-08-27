<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>

    <div class="web-sub-title">
      普通用法
    </div>
    <yu-button @click="showNotify">点击</yu-button>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuButton from '../components/button'

export default {
  methods: {
    showNotify() {
      this.$notify({ title: '警告', content: '内容' })
    },
  },
  components: {
    YuButton,
  },
}
</script>

