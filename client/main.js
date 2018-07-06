import api from './helpers/api.js'

const app = new Vue({
    el: "#app",
    data: {
        wineryname: '',
        wineryowner: '',
        permitnumber: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        county: '',
        lat: null,
        lng: null,
        status: '',
        videourl: '',
        websiteurl: '',
        phone: '',
        email: '',
        description: '',
        wineries: []
    },
    created () {
        api.getWineries()
            .then(wineries => this.wineries = wineries)
            .catch( e => console.log(e))
    },
    methods: {
        submit () {
            const winery = {
                wineryname: this.wineryname,
                wineryowner: this.wineryowner,
                permitnumber: this.permitnumber,
                street: this.street,
                city: this.city,
                state: this.state,
                zipcode: Number(this.zipcode),
                county: this.county,
                lat: Number(this.lat),
                lng: Number(this.lng),
                status: this.status,
                videoUrl: this.videourl,
                websiteUrl: this.websiteurl,
                phone: this.phone,
                email: this.email,
                description: this.description,
            }
            //using the api to add a winery to the database
            api.addWinery(winery)
                .then(winery => this.wineries.unshift(winery)) //adding the winery to the vue instance.
        }
    }
})

export default app 