<script>
import loading from './views/loading.vue'
import {useWeatherStore} from './stores/counter'
export default{
  data(){   
    return{
      msg:'lol',
      store:useWeatherStore()
    }
  },
  components:{
    loading
  },
  mounted(){
    this.store.getData();
  }
}
</script>

<template>


  <header>
    <nav class="menu">
      <router-link to="/weather"><button>forecast</button></router-link>
      <router-link to="/horoscope"><button>Horoscope</button></router-link>
    </nav>
    <router-view></router-view>
    {{ store.msg }}
  </header>

  

</template>

<style scoped>


header{
  width: 990px;
  margin: 0 auto;
}
.menu{
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  
  
  backdrop-filter: blur(15px); 
}
.menu button{
  font-size: 24px;
  background: rgb(55, 120, 240);
  padding: 10px 20px;
  border: none;
  width: 100%;
  transition: all 0.25s;
  border-bottom: 5px rgb(77, 73, 73) solid;
  padding-bottom: 13px;
}
.menu a{flex-basis: 40%;}
.menu a:nth-child(1) button{
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right: 0.25px black solid;
}

.menu a:nth-child(2) button{
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left: 0.25px black solid;
}

.menu button:hover{
  background-color: rgb(40, 90, 182);
  color: rgba(56, 56, 56, 0.995);
}

.menu button:active{
  background-color: rgb(40, 90, 182);
  color: rgb(34, 34, 34);
  border-bottom: none;
  transform: translateY(3px);
  padding-bottom: 10px;
}

</style>
