<template>
  <button
    @click="handleClick"
    class="yu-button"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[ type, size, {disabled:disabled}, {circle:circle}, {plain:plain}]">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'YuButton',
  props: {
    icon: String,
    disabled: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    plain: Boolean,
    type: String,
    size: String,
    // 原生属性button / submit / reset
    nativeType: {
      type: String,
      default: 'button',
    },
    methods: {
      handleClick(event) {
        if (!this.disabled) {
          this.$emit('click', event)
        }
      },
    },
  },
}
</script>
