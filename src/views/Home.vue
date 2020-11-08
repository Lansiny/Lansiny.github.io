<template>
  <div>
    <el-container class="home-container">
      <el-header>
        <div>
          <span class="logo-text">Re:Faith</span>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#333744"
            text-color="#ddd"
            active-text-color="#fff"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="isCollapseTransition"
            router
          >
            <!-- 菜单 -->

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isCollapse: false,
      isCollapseTransition: false
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  },
  mounted: function () {

  }
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
    font-size: 1.5em;
    color: #fff;
  }
}

.el-aside {
  background-color: #333744;
  .toggle-button {
    background-color: #4a5064;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.3em;
    cursor: pointer;
  }
}
.el-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedf1;
}
</style>
