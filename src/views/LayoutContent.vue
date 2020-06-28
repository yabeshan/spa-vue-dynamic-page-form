<template>
  <div>
    Title = {{pageConfig.title}} | Url = {{pageConfig.url}} | Config = {{pageConfig.config}}
    <hr><br>
    <div
      v-for="(row, key) in json" :key="key"
      :gutter="16" class="ant-row"
    >
      <div v-for="(col, key) in row" :key="key">
        <RowRender :config="col" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RowRender from '../components/RowRender'
export default {
  props: ['pageConfig'],
  components: {
    RowRender
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      json: {}
    }
  },
  created () {
    this.loadConfig()
  },
  watch: {
    pageConfig (to, from) {
      this.loadConfig()
    }
  },
  methods: {
    loadConfig () {
      const link = (this.pageConfig.config) ? this.pageConfig.config : 'page01.json'
      axios.get(
        this.baseUrl + 'static/' + link
      ).then(
        response => {
          this.json = response.data
          return true
        }
      ).catch(
        error => console.log(error)
      )
    }
  }
}
</script>
