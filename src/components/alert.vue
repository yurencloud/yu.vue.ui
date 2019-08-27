<template>
  <div class="yu-alert"
       :class="[type,{center:center},{description:description}]"
       v-show="visible">
      <slot></slot>
      <i class="iconfont" v-if="showIcon && !title" :class="[icons[type]]"></i>
      <p class="title" v-if="title">
        <i class="iconfont" v-if="showIcon" :class="[icons[type]]"></i>
        {{title}}
      </p>
      <p class="description" v-if="description">{{description}}</p>
      <i v-if="closeable" class="iconfont icon-close"  @click="close"></i>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      icons: {
        success: 'icon-check-circle',
        info: 'icon-information',
        warning: 'icon-warning-circle',
        error: 'icon-close-circle',
      },
      visible: true,
    }
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'info',
    },
    showIcon: Boolean,
    center: Boolean,
    description: String,
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      if (this.closeable) {
        this.visible = !this.visible
        this.$emit('close', event)
      }
    },
  },
}
</script>
