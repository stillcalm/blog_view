<template>
  <div class="title">
    <ul>
      <li name="daohang">    
        <router-link to="/" >
        <span >归档</span>
        </router-link>
      </li>
      <li name="daohang">
        <router-link to="/book" >
        <span>书单</span>
        </router-link>
      </li>
      <li name="daohang">
        <router-link to="/blog" >
        <span>行博</span>
        </router-link> 
      </li>
      <li name="daohang">
        <router-link to="/about" >
        <span>关于</span>
        </router-link>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Navigate'
}
  window.onmousemove = function(){  
      var arr = document.getElementsByName("daohang")
      for(var i = 0;i<arr.length;i++){  
          arr[i].onmouseover = function(){
              this.className = 'td1';
          }
          arr[i].onmouseout = function(){
              this.className = 'td2';
          } 
        }  
    } 
</script>


<style lang="less" scoped>
.title ul{
  width: 625px;
  margin: 0px auto;
}
.title li{
  list-style: none;
  float: left;
  width: 150px;
  height: 50px;
  border: 0px solid red;
  text-align: center;
}
.title a{
  font-size: 14px;
  color: #000;
  text-decoration: none;
}
.title{
  width: 100%;
  min-width: 987px;
  height: 50px;
  line-height: 50px;
  background-color: #cccccc;
  text-align: center;
  position: fixed;
}
.td1{
  background-color:#ffffff;
}
.td2{
  background-color:#cccccc;
}
</style>