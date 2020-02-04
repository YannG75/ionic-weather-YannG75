<template>
    <div class="ion-page" mode="md">
        <ion-header translucent no-border>
            <ion-toolbar>
                <ion-title>Méteo</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-item>
                <ion-label position="floating">Ville</ion-label>
                <ion-input @input="city = $event.target.value"></ion-input>
            </ion-item>
            <ion-button color="secondary" @click="api">api weather</ion-button>


            <ion-card v-if="weatherRes != null">
                <img :src="this.backgroundLink"/>
                <ion-card-header>
                    <ion-card-title>{{weatherRes.main.temp}}°C</ion-card-title>
                    <ion-card-subtitle>{{weatherRes.weather[0].description}}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content color="">
                    <ion-text color="dark">
                        <h1>{{weatherRes.name}}</h1>
                    </ion-text>

                    <p>humidité : {{weatherRes.main.humidity}}</p>
                    <p>vitesse du vent : {{weatherRes.wind.speed}} km/h</p>


                </ion-card-content>
            </ion-card>
        </ion-content>


    </div>
</template>

<script>
    import summer from "../assets/Summer.png"
    import rain from "../assets/Rainy.png"
    import snow from "../assets/Snow.png"


    export default {
        name: 'HelloWorld',
        props: {},

        data() {
            return {
                city: '',
                backgroundLink: '',
                weatherRes: null

            }
        },

        methods: {
            alert(msg) {
                return this.$ionic.alertController.create({
                    header: 'Alert',
                    subHeader: '',
                    message: msg,
                    buttons: ['OK'],
                })
                    .then(alert =>
                        alert.present())
            },

            api() {

                if (this.city === '')
                    this.alert('veuillez renseigner une Ville')

                else {
                    this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + process.env.VUE_APP_WEATHER_IONIC_APP + '&units=metric&lang=fr')
                        .then(res => {
                            this.background(res.data.weather[0].main)
                            this.weatherRes = res.data
                        })
                        .catch(error => {
                            this.alert('cette ville n\'existe pas ou est mal renseignée')
                        })
                }


            },

            background(status) {
                switch (status) {
                    case "Rain" :
                        this.backgroundLink = rain
                        console.log(this.backgroundLink)
                        break
                    case "Clouds":
                        this.backgroundLink = rain
                        console.log(this.backgroundLink)
                        break
                    case "Mist":
                        this.backgroundLink = rain
                        console.log(this.backgroundLink)
                        break
                    case "Snow":
                        this.backgroundLink = snow
                        console.log(this.backgroundLink)
                        break
                    case "Thunderstorm":
                        this.backgroundLink = rain
                        console.log(this.backgroundLink)
                        break
                    case "Clear":
                        this.backgroundLink = summer
                        break
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    ion-content {
        --background: url("../assets/photo-1464852045489-bccb7d17fe39.jpg") center no-repeat;
    }

    ion-toolbar {
        --background: #436d7b;
    }

    ion-card {
        --background: #eaefff !important;
    }

    ion-title {
        color: #eaefff;
    }

</style>
