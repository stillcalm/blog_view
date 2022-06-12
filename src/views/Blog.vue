<template>
  <Navigate></Navigate>
  <div class="blog">
    <Bcg></Bcg>
  </div>
</template>

<script>
import Bcg from '@/components/Bcg.vue'
import Navigate from '@/components/Navigate.vue'

export default {
  name: 'Blog',
  components: {
    Bcg,
    Navigate
  }
}
</script>

<style lang="less" scoped>
.blog{
  width: 60%;
  height: 2000px;
  min-width: 900px;
  margin: 0px auto;
}
</style>