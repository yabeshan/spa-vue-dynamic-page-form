<template>
  <a-layout-header class="a-layout-header-custom">
    <a-menu
      theme="light"
      mode="horizontal"
      :default-selected-keys="selectedKeys"
      :selected-keys="selectedKeys"
      :style="{ height: '64px' }"
    >
      <a-menu-item
        v-for="(link, key) in config"
        :key="key"
        :style="{ height: '40px' }"
      >
        <router-link :to="link.url">{{link.label}}</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  props: ['config'],
  data () {
    return {
      selectedKeys: [0]
    }
  },
  watch: {
    $route (to, from) {
      this.config.forEach((item, key) => {
        if (to.fullPath === item.url) this.selectedKeys = [key]
      })
    }
  }
}
</script>
