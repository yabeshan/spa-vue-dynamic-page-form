<template>
  <div>
    <LayoutContent :pageConfig="pageConfig" class="a-layout-content-custom"/>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutContent from './LayoutContent'
import LayoutFooter from './LayoutFooter'
export default {
  props: ['config'],
  components: {
    LayoutContent,
    LayoutFooter
  },
  data () {
    return {
      pageConfig: {}
    }
  },
  created () {
    this.validatePage()
  },
  watch: {
    $route () {
      this.validatePage()
    }
  },
  methods: {
    validatePage () {
      if (this.$route.path === '/') {
        this.$router.push(this.config[0].url)
        return false
      }
      const pageConfig = this.config.filter(page => {
        return page.url === this.$route.path
      })
      if (pageConfig.length > 0) {
        this.updatePage(pageConfig)
      } else {
        this.$router.push('/404')
      }
    },
    updatePage (pageConfig) {
      this.pageConfig = pageConfig[0]
    }
  }
}
</script>
