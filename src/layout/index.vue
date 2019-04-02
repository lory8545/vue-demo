<template>
  <el-container>
    <el-header height="1rem">
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer height="1rem">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-footer, .el-header, .el-main {
  padding: 0 !important;
}
</style>
