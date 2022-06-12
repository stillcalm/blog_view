<template>
<Navigate></Navigate>

  <div class="book">
    <Bcg></Bcg>
  </div>
</template>

<script>
import Bcg from '@/components/Bcg.vue'
import Navigate from '@/components/Navigate.vue'

export default {
  name: 'Book',
  components: {
    Bcg,
    Navigate
  }
}
</script>

<style lang="less" scoped>
.book{
  width: 60%;
  min-width: 900px;
  height: 2000px;
  margin: 0px auto;
}
</style>