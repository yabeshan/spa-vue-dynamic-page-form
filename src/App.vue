<template>
  <a-layout class="app-custom">
    <LayoutHeader :config="json"/>
    <a-layout-content class="ant-layout-content-custom">
      <router-view :config="json" />
    </a-layout-content>
  </a-layout>
</template>

<script>
import axios from 'axios'
import LayoutHeader from './views/LayoutHeader'
export default {
  components: {
    LayoutHeader
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      json: [{ title: 'Loading', label: 'Loading', url: '' }]
    }
  },
  created () {
    axios.get(
      this.baseUrl + 'static/allpages.json'
    ).then(
      response => (this.json = response.data)
    ).catch(
      error => console.log(error)
    )
  }
}
</script>

<style lang="css">
@import './views/index.css';
</style>
