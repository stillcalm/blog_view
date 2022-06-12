<template>
<Navigate></Navigate>

  <div class="archive">
    <Bcg></Bcg>
    <div class="archive_content">
      <div class="archive_left">
        <ul>
            <li class="article_item" 
            v-for="archive in archiveList" 
            :key="archive.archive_id">
              <a href="" class="archive_href" @click="articleDetail(archive.archive_id)">
                <p class="article_title">{{archive.title}}</p>
                <div class="article_time">
                  <p class="article_date">{{archive.date_write}}</p>
                  <p class="article_date">{{archive.date_latest}}</p>
                </div>
                <div class="article_footer">
                  <ul>
                    <li class="article_tag_item">{{archive.tags[0]}}</li>
                    <li class="article_tag_item">{{archive.tags[1]}}</li>
                    <li class="article_tag_item">{{archive.tags[2]}}</li>
                  </ul>
                  <span>阅读({{archive.reader}})</span>
                  <span>点赞({{archive.like}})</span>
                </div>
              </a>
            </li> 
        </ul>
      </div>
      <div class="archive_right">
        <Calendar></Calendar>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Bcg from '@/components/Bcg.vue'
import Calendar from '@/components/Calendar.vue'
import Navigate from '@/components/Navigate.vue'

export default {
  name: 'Archive',
  components: {
    Bcg,
    Calendar,
    Navigate
  },
  data() {
    return {
      archiveList: []
    };
  },
  mounted: function() {
    this.axios.get('http://localhost:3000/api/archivesList').then(
      response => this.archiveList = response.data  
    )
  } ,
  methods: {
    articleDetail: function (id) {
      this.$router.push('/archiveDetail/' + id)
    }    
  }

}

</script>

<style lang="less" scoped>
.archive{
  width: 60%;
  min-width: 900px;
  margin: 0px auto;
  .archive_content{
    width: 100%;
    .archive_left ul{
      padding: 0px;
      margin: 0px;
    }
    .archive_left{
      float: left;
      width: calc(67% - 1px);
      height: 500px;
      border-right: 1px dashed #c9c9c9;
      .article_item{
        width: calc(100% - 100px);
        height: 103px;
        margin: 30px;
        padding: 20px;
        list-style: none;
        .archive_href{
          width: 100%;
          height: 100%;
          text-decoration: none;
          display: block;
          .article_title{
            margin: 0px;
            width: 100%;
            height: 30px;
            font-size: 22px;
            color: #000;
            font-weight: 500;
          }
          .article_time{
            width: 100%;
            height: 17px;
            margin-top: 10px;
          }
          .article_date{
            display: inline;
            font-size: 13px;
            margin: 0px 15px 0px 0px;
            text-align: center;
            color: #999;
          }
          .article_footer ul{
            height: 100%;
          }
          .article_footer span{
            float: right;
            color: #999;
            margin-right: 15px;
          }
          .article_footer{
            width: 100%;
            height: 22px;
            margin-top: 15px;
            font-size: 12px;
            .article_tag_item{
              display: inline;
              list-style: none;
              margin-right: 15px;
              background-color: #999;
              color: #fff;
              border-radius: 2px;
              padding: 2px 3px 4px;
            }
          }
        }
      }
    }
    .archive_right{
      float: left;
      width: 33%;
      height: 500px;
    }
  }
}
</style>