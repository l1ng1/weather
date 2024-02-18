import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const useWeatherStore = defineStore('counter',{
  state:()=>({
    data:null,//объект с погодой для юзера
    error:null,//ошибки
    loading:null,//индикатор для анимации загрузки
  }),
  getters:{
    getMsg:(state)=>state.msg
  },
  actions:{
    async getData(name){
      this.loading = true;//загрузка начинается
      try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=76718bf6a90d44b9bc8153803232605&q='+name);

        let data = await response.json();//получаем данные
        console.log(data);
        this.data = data;
        this.error = null;//ошибок нет,все ок
        this.loading = false;//загрузка закончилась
        
      } catch (error) {
        this.error = error.message || 'Ошибка при загрузке данных';
      } finally {
        this.loading = false;
      }
    },
    async getHoroscopeData(sign){
      sign = sign.toLowerCase();
      const url = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+sign+'&day=today';
      const options = {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': '148d2fbc7fmshc596c06e22fde61p1be30cjsn7aeb3673f70e',
          'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }

})
