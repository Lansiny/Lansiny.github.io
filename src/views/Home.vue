<template>
  <div>
    <el-container class="home-container">
      <el-header height="40px">
        <div>
          <span class="logo-text">心园工坊</span>
        </div>
      </el-header>
      <el-main>

      </el-main>
      <el-footer height="30px"></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {},
  mounted: function() {}
}
</script>

<style lang="less" scoped>

.home-container {
  height: 100vh;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-text {
    font-size: 1.3em;
    color: #fff;
  }
}

.el-main {
  background-color: #eaedf1;
}

.el-footer {
  background-color: #dfdfdf;
}
</style>
