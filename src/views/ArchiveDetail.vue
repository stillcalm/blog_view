<template>
  <Navigate></Navigate>
  <div class="archive" v-cloak>
    <div class="archive_left">
      <div class="archive_header">
        <h1>{{archive.title}}</h1>
        <ul >
          <li class="archive_info" >发表时间:{{archive.date_write}}</li>
          <li class="archive_info">更新时间:{{archive.date_latest}}</li>
          <li class="archive_info">阅读数:{{archive.reader}}</li>
        </ul>
      </div>
      <div class="archive_content markdown-body" v-html="compiledMarkdown()"></div>
    </div>
    <div class="archive_right">
      <ul class="archive_catalogue">
        <li>目录13212</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { marked } from 'marked'
import Navigate from '@/components/Navigate.vue'

export default {
  name: 'ArchiveDetail',
  components: {
    Navigate
  },
  data() {
    return {
      archive: {}
    }
  },
  mounted: function() {
    let id = this.$route.params.id
    this.axios.get('http://localhost:3000/api/archiveDetail/' + id).then(
      response => this.archive = response.data,
      response => console.log(response)
    )
  },
  methods: {
    compiledMarkdown: function() {
      return marked(this.archive.content || '')
    }
  }
}
</script>

<style scoped>
[v-cloak]{
display: none !important; 
}
</style>

<style lang="less" scoped>
.archive {
  width: 60%;
  min-width: 900px;
  margin: 0px auto;
  display: flex;
  .archive_left {
    flex: 1;
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef;
    .archive_header li {
      list-style: none;
      display: inline;
    }
    .archive_header ul {
      padding: 0px;
      margin: 0px;
    }
    .archive_header {
      padding: 40px 20px 20px 20px;
      margin-bottom: 30px;
      .archive_info {
        margin-right: 20px;
      }
    }
    .archive_content{
      height: 3000px;
      padding: 0px 20px 20px 20px;
    }
  }
  .archive_right {
    width: 240px;
    .archive_catalogue{
      position: fixed;
      top: 50px;
    }
  }
}
</style>