<template>
    <div class="article_bcg">
        <div class="bcg"></div>
    </div>
</template>


<script>
export default {
    name: 'Bcg',
}
</script>

<style lang="less" scoped>
.article_bcg{
  width: 100%;
  min-width: 900px;
  margin: 0px auto;
  margin-bottom: 30px;
  .bcg{
    background: url(../assets/archive.jpg) no-repeat;
    background-size: 100%;
    width: 100%;
    min-width: 900px;
    height: 500px;
    z-index: -1;
    position: relative;
    background-position: 0px 50%;
 }
}

</style>