<template>
  <div class="calendar">
    <div class="calendar_title">日期</div>
    <div class="calendar_date">
      <div class="calendar_year">
        <span>2022</span>
      </div>
      <div class="calendar_detail">
        <ul>
          <li class="calendar_month">1月</li>
          <li class="calendar_month">2月</li>
          <li class="calendar_month">3月</li>
          <li class="calendar_month">4月</li>
          <li class="calendar_month">5月</li>
          <li class="calendar_month">6月</li>
          <li class="calendar_month">7月</li>
          <li class="calendar_month">8月</li>
          <li class="calendar_month">9月</li>
          <li class="calendar_month">10月</li>
          <li class="calendar_month">11月</li>
          <li class="calendar_month">12月</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Calendar',
}
</script>

<style lang="less" scoped>
.calendar{
    width: calc(100% - 60px);
    height: auto;
    padding: 0px 30px 0px 30px;
  .calendar_title{
      width: 100%;
      margin-bottom: 15px;
  }
  .calendar_date{
    .calendar_year{
        width: 100%;
        font-size: 20px;
        color: #666;
        text-align: center;
        margin-bottom: 20px;
    }
    .calendar_detail ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 5px;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
    .calendar_detail{
      .calendar_month{
          list-style: none;
          height: 60px;
          border: 1px solid #d9d9d9;
          text-align: center;
          line-height: 60px;
          font-size: 14px;
      }
    }
  }
}
</style>
