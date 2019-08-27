<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <div class="web-title">进度条</div>

    <div class="web-sub-title">普通用法</div>
    <yu-progress type="line" stroke-height="10px" :percentage="80"/>
    <yu-progress type="line" stroke-height="10px" :percentage="0"/>
    <yu-progress type="line" stroke-height="10px" :percentage="100"/>
    <yu-progress type="line" stroke-height="10px" :percentage="50" status="exception"/>

    <div class="web-sub-title">文字在内部</div>
    <yu-progress type="line" stroke-height="20px" :percentage="80" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="0" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="100" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="50" status="exception" :text-inside="true"/>

    <div class="web-sub-title">圆形进度条</div>
    <yu-progress type="circle" stroke-height="10px" color="rgb(142, 113, 199)" :percentage="80"/>
    <yu-progress type="circle" stroke-height="10px" :percentage="50"/>
    <yu-progress type="circle" stroke-height="10px" status="exception" :percentage="50"/>
    <yu-progress type="circle" stroke-height="10px" :percentage="100"/>

    <div class="web-sub-title">v-model</div>
    <yu-progress type="line" stroke-height="10px" :percentage="value"/>

    <yu-counter v-model="value" :step="10" />

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuProgress from '../components/progress'
import YuCounter from '../components/counter'

export default {
  data() {
    return {
      value: 50,
    }
  },
  methods: {},
  components: {
    YuProgress,
    YuCounter,
  },
}
</script>

