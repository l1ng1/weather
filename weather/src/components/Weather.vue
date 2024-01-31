<template>
    <section class="weather">

        <div class="main">
            <h2>Today is a {{date}}</h2>
            
            <div class="input">
            <p>Инпут для ввода города</p>
            <input type="text" placeholder="your city" v-model.lazy="city_name">
            <button @click="getData()">Search</button>
            </div>

            <div class="data">
                 
                <div v-if="info.isEmpty" class="empty">
                    <h2>You have not chosen a city</h2>
                    <loading></loading>
                    
                </div>

                <div v-else class="full"> 

                    <div class="city">
                        <h3>City - </h3>
                        <p>{{ info.region }} , {{ info.country }}</p>
                    </div>

                    <div class="txt"> 
                        <h2>{{ info.txt }}</h2>
                    </div>


                    <div class="temp">

                        <div class="real">
                            <h3>Temperature:</h3>
                            <p>{{ info.temp }} C</p>
                        </div>
                        
                        <div class="feels">
                            <h3>The temperature you feel:</h3>
                            <p>{{ info.feelslike }} C</p>
                        </div>
                        
                    </div>

                    <div class="wind">
                        <p>The speed of wind:</p>
                        <p>{{ info.wind_speed }}</p>
                    </div>

                </div>
            </div>

            

        </div>

    </section>
</template>

<script>
import { useWeatherStore } from '@/stores/counter';
import loading from '../views/loading.vue'
export default {
    components:{loading},
    data(){
        return{
            city_name:'',
            date:'',
            store:useWeatherStore(),
            info:{
                region:'',
                country:'',
                feelslike:0,
                temp:0,
                wind_speed:0,
                txt:'',
                isEmpty:true,
            }
        }
    },
    methods:{
       async getData(){
        let name = this.city_name
           await this.store.getData(name);//запрос в store
            if(await this.store.data != null){ //проверка
                let newData = this.store.data;//упрощение
                this.info = {
                    region:newData.location.region,
                    country:newData.location.country,
                    feelslike:newData.current.feelslike_c,
                    temp:newData.current.temp_c,
                    wind_speed:newData.current.wind_mph,
                    txt:newData.current.condition.text,
                    isEmpty:false,
                }//обновление данных
            }
            
        }
    },
    mounted(){
        let a = new Date();
        let b = a.toLocaleDateString()
        console.log(a.toLocaleDateString());
        this.date = b;
    }
}
</script>


<style scoped>

.full{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(238, 217, 246);
    padding: 20px;
    border-radius: 20px;
    margin-top:20px;
    color:black;
}


.city,.wind{
 display: flex;
 justify-content: space-evenly;
 font-size: 17px;
 align-items: center;
}


.temp{
    display: flex;
    justify-content: space-between;
}

.real ,.feels{
    width: 40%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgba(59, 58, 58, 0.546);
    padding: 10px;
    border-radius: 20px;
}








.main{
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    font-size: 24px;
    background-color: rgb(129, 129, 193);
    padding: 30px;
    min-height: 700px;
    border-radius: 20px;
    margin-top: 20px;
    color:white;
    text-align: center;
    align-content: center;
}
.main h2{font-size: 35px;}


.input{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.input p{
    display: inline-block;
    width: 100%;
    
}

.input button,.input input{
    width: 40%;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    outline: none;
    font-size: 20px;
    background-color: rgba(226, 250, 250, 0.752);
    
}
.input input::placeholder{color: black;}

.empty{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.empty div{margin-top:20px;}
.empty h2{font-size: 14px;margin-bottom: 50px;}





</style>