<template>
  <div class="app-container calendar-list-container">
    <el-tabs type="border-card">
      <el-tab-pane label="user setting">a</el-tab-pane>
      <el-tab-pane label="living setting">b</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import settingApi from '@/api/setting'

  export default {
    name: 'Index',
    components: {},
    data() {
      return {
        settings: []
      }
    },
    created() {
      settingApi.getSettings().then(response => {
        this.settings = response
      })
    }
  }
</script>

<style scoped>

</style>
