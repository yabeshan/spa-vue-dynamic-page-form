import Vue from 'vue';
import FormRender from './FormRender.vue';

export default { title: 'FormRender' };

export const withPlaceholder = () => '<my-comp :placeholder="placeholder"></my-comp>';

export const withValue = () => '<my-comp :value="value"></my-comp>';

export const withLabel = () => '<my-comp :label="label"></my-comp>';

export const withTooltip = () => '<my-comp :tooltip="tooltip"></my-comp>';

export const withCheckbox = () => '<my-comp :checkbox="checkbox"></my-comp>';

export const asAComponent = () => ({
  components: { FormRender },
  template: '<my-comp></my-comp>'
});