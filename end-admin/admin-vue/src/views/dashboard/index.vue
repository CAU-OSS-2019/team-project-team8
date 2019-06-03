<template>
  <div class="dashboard-container">
    <panel-group :statistic="statisticData"/>
    <el-row style="background:#fff;padding:16px 16px 0;margin-top:45px;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"/>
    </el-row>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'

  export default {
    name: 'Dashboard',
    components: {
      PanelGroup,
      LineChart
    },
    data() {
      return {
        statisticData: {
          allCount: 0,
          todayCount: 0,
          processingCount: 0,
          finishedCount: 0
        },
        lineChartData: []
      }
    },
    computed: {
      // ...mapGetters([
      //   'name',
      //   'roles'
      // ])
    },
    mounted() {
      this.getStatistic()
      setInterval(() => {
        this.getStatistic()
      }, 60000)
    },
    methods: {
      getStatistic() {

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
