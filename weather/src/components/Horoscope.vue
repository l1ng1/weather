<template>
    <div class="select">
        <div class="search">

        <div class="input" @click="isOpenList = !isOpenList">{{ inputVal }}</div>

        <ul v-auto-animate="'fade'" class="list" v-show="isOpenList">
            <li 
            v-for="name in signs" 
            :key="name" 
            :value=name @click="updateInfo($event)">{{name}}
            </li>
        </ul>

        </div>
         
        <button @click="getHoroscope" class="search_btn">Let's see!</button>       
    </div>
</template>

<script>
import { useWeatherStore } from '@/stores/counter';
import { vAutoAnimate } from '@formkit/auto-animate';
export default {
    data(){
        return{
            isOpenList:false,
            inputVal:'Chose your sign',
            store:useWeatherStore(),
            signs:['Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
        }
    },
    methods:{
        updateInfo(ev){
            this.inputVal = ev.target.innerText;
            this.isOpenList = false;
        },
        getHoroscope(){
            this.store.getHoroscopeData(this.inputVal);
        }
    }
}
</script>



<style scoped>

.select{
    display: flex;
    width: 90%;
    justify-content: space-between;
    font-size: 24px;
    /* align-items: center; */
}

.input{
    width: 100%;
    text-align: center;
    font-size: 31px;
    border-radius: 20px;
    background-color: white;
    border:1px white solid;
    transition: all 0.25s;
}

.input:hover{
    border:1px black solid;
}


.search{
    width: 68%;
    position: relative;
    margin-bottom:20px;
    padding: 20px;
    align-self: flex-start;
    padding-top: 10px;
}


.list{
    padding: 10px 5px;
    width: 100%;
    text-align: center;
    /* position: absolute; */
    list-style: none;
    margin-block-start:0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
    background-color: rgba(184, 184, 231);
    border-radius: 20px;
    margin-top: 20px;
}

.list li{
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 5px 0px;
    border:1px rgba(184, 184, 231) solid;
    transition: all 0.25s;
}
.list li:hover{border:1px black solid}
.search_btn{
    border:none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 24px;
    background-color: white;
    cursor: pointer;
    position: static;
    transition: all 0.25s;
    appearance:none;
    align-self: flex-start;
}

.search_btn:hover{
    box-shadow: 0px 0px 100px 1px black;
}


</style>