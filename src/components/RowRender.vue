<template>
  <FormRender
    :dynamicClass="dynamic"
    :placeholder="holder"
    :value="value"
    :label="label"
    :tooltip="tooltip"
    :checkbox='checkbox'
  />
</template>

<script>
import FormRender from './FormRender'
export default {
  props: ['config'],
  components: {
    FormRender
  },
  data () {
    return {
      type: '',
      holder: '',
      value: '',
      label: '',
      tooltip: '',
      checkbox: '',
      s12: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24 padding-item-custom',
      s11: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-22 ant-col-xl-22 padding-item-custom',
      s10: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-22 ant-col-xl-20 padding-item-custom',
      s09: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-20 ant-col-xl-18 padding-item-custom',
      s08: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-20 ant-col-xl-16 padding-item-custom',
      s07: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-20 ant-col-xl-14 padding-item-custom',
      s06: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-18 ant-col-xl-12 padding-item-custom',
      s05: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-14 ant-col-xl-10 padding-item-custom',
      s04: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-16 ant-col-lg-12 ant-col-xl-8 padding-item-custom',
      s03: 'ant-col-xs-24 ant-col-sm-18 ant-col-md-12 ant-col-lg-9 ant-col-xl-6 padding-item-custom',
      s02: 'ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-4 padding-item-custom',
      s01: 'ant-col-xs-12 ant-col-sm-6 ant-col-md-4 ant-col-lg-3 ant-col-xl-2 padding-item-custom'
    }
  },
  computed: {
    dynamic: (comp) => {
      comp.type = comp.config.type
      comp.holder = comp.config.holder
      comp.value = comp.config.value
      comp.label = comp.config.label
      comp.tooltip = comp.config.tooltip
      comp.checkbox = comp.config.checkbox
      return comp[comp.config.class]
    }
  }
}
</script>
