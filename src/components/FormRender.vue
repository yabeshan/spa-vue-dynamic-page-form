<template>
  <div :class="dynamicClass">
    <div :style="{ float: 'left', paddingRight: '10px' }">{{label}}</div>
    <a-tooltip v-if="tooltipVisible" :style="tooltipPosition">
      <template slot="title">{{tooltip}}</template>
      <a-icon type="info-circle" theme="filled" />
    </a-tooltip>
    <a-checkbox v-if="checkboxVisible" @change="onChange" :style="{ float: 'right' }">{{checkbox}}</a-checkbox>
    <br>
    <a-input :placeholder="placeholder" :value="value" />
  </div>
</template>

<script>
export default {
  props: ['dynamicClass', 'placeholder', 'value', 'label', 'tooltip', 'checkbox'],
  methods: {
    onChange (e) {
      // console.log(`checked = ${e.target.checked}`)
    }
  },
  computed: {
    checkboxVisible: (comp) => {
      return (comp.checkbox.length > 0)
    },
    tooltipVisible: (comp) => {
      return (comp.tooltip.length > 0)
    },
    tooltipPosition: (comp) => {
      return (comp.checkbox.length > 0) ? { float: 'right' } : { float: 'left' }
    }
  }
}
</script>
