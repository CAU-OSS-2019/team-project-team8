<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-select v-model="listQuery.userType" class="filter-item" placeholder="please choose user type">
        <el-option label="All" value="-1"/>
        <el-option
          v-for="item in gameType"
          :key="item.type + item.name"
          :label="item.name"
          :value="item.type"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        검색
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      ref="multipleTable"
      :data="list"
      :row-class-name="tableRowClassName"
      element-loading-text="get me some time~~"
      border
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column align="left" label="로그">
        <template slot-scope="scope">
          {{ scope.row.msg }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="시간">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="상태">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isSuccess" type="success" size="small">성공</el-tag>
          <el-tag v-if="!scope.row.isSuccess" type="danger" size="small">실패</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page.sync="page.current"
        :page-sizes="[15, 25, 40, 60]"
        :page-size="page.size"
        :total="page.total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
  import waves from '@/directive/waves'

  export default {
    name: 'Index',
    directives: {
      waves
    },
    data() {
      return {
        listLoading: false,
        listQuery: {},
        page: {
          current: 1,
          size: 15,
          total: 0
        },
        list: [],
        userType: [
          {
            type: 1,
            name: 'Max'
          },
          {
            type: 2,
            name: 'Sbobet'
          },
          {
            type: 3,
            name: 'Fantasy'
          }
        ]
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        // this.listLoading = true
        // sysLog.getLogList(this.page, this.listQuery)
        //   .then(response => {
        //     console.log(response)
        //     this.list = response.records
        //     this.page.total = parseInt(response.total)
        //     this.listLoading = false
        //   }).catch(() => {
        //   this.listLoading = false
        // })
      },
      handleFilter() {
        this.page.current = 1
        this.getList()
      },
      handleSizeChange(val) {
        this.page.size = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.page.current = val
        this.getList()
      },
      tableRowClassName({ row, rowIndex }) {
        if (!row.isSuccess) {
          return 'warning-row'
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

  .filter-container {
    margin-bottom: 20px;
  }

  .el-tag {
    margin-bottom: 5px;
    display: inline-block;
  }

  .pagination-container {
    margin-top: 15px;
  }

  .el-table .warning-row {
    background: rgba(245, 108, 108, .1) !important;
  }
</style>
