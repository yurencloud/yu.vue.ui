<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI</h2>
    <yu-tabs >
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>


    <div class="web-sub-title">卡片化</div>
    <yu-tabs type="border-card">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>


    <div class="web-sub-title">自定义位置</div>
    <yu-tabs width="100%" tab-position="top">
      <yu-tabs-nav slot="nav">用户管理用户管理用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>
    <yu-tabs width="100%" tab-position="left">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>
    <yu-tabs width="100%" tab-position="right">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>
    <yu-tabs width="100%" tab-position="bottom">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">权限管理</yu-tabs-nav>
      <yu-tabs-item slot="item">用户管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">配置管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">角色管理的内容</yu-tabs-item>
      <yu-tabs-item slot="item">权限管理的内容</yu-tabs-item>
    </yu-tabs>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>
<script>
import YuTabs from '../components/tabs'
import YuTabsItem from '../components/tabs-item'
import YuTabsNav from '../components/tabs-nav'

export default {
  methods: {},
  components: {
    YuTabs,
    YuTabsItem,
    YuTabsNav,
  },
}
</script>

