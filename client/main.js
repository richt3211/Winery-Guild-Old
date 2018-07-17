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
        logo: '',
        bgImg: '',
        phone: '',
        email: '',
        description: '',
        wineries: [],
        exists: false,
        search: 'SIGHTGLASS CELLARS',
        wineryId: '',
        logoLink: '',
        backgroundLink: '',
    
    },
    created () {
        console.log("running get wineries function")
        api.getWineries()
            .then(wineries => {
                this.wineries = wineries
                console.log('adding wineries to vue instance')
            })
            .catch( e => console.log(e))
    },
    methods: {
        upload1(){
            var upld1 = document.querySelector('#uploader1')
            upld1.click()
        },
        upload2(){
            var upld2 = document.querySelector('#uploader2')
            upld2.click()
        },
        addWinery () {
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
                videourl: this.videourl,
                websiteurl: this.websiteurl,
                logo: this.logo,
                bgImg: this.bgImg,
                phone: this.phone,
                email: this.email,
                description: this.description,
            }
            //using the api to add a winery to the database
            api.addWinery(winery)
                .then(winery => this.wineries.unshift(winery)) //adding the winery to the vue instance.
        },
        logoData(e){
            this.logo = e.target.files[0]
        },
        bgData(e){
            this.bgImg = e.target.files[0]
        },
        getWinery (name) {
            console.log("pulling in the winery")
            const indexOfWinery = this.wineries.findIndex(winery => winery.wineryname === name)
            const winery = this.wineries[indexOfWinery]
            this.wineryname = winery.wineryname
            this.wineryowner = winery.wineryowner
            this.permitnumber = winery.permitnumber
            this.street = winery.street
            this.city = winery.city
            this.state = winery.state
            this.zipcode = winery.zipcode
            this.county = winery.county
            this.lat = winery.lat
            this.lng = winery.lng
            this.videourl = winery.videourl
            this.status = winery.status
            this.websiteurl = winery.websiteurl
            this.phone = winery.phone
            this.email = winery.email
            this.description = winery.description
            this.wineryId = winery._id
            this.exists = true
            this.logoLink = winery.logo
            this.backgroundLink = winery.background
        },
        updateWinery () {

            const winery = {
                wineryname: this.wineryname,
                // wineryowner: this.wineryowner,
                // permitnumber: this.permitnumber,
                // street: this.street,
                // city: this.city,
                // state: this.state,
                // zipcode: Number(this.zipcode),
                // county: this.county,
                // lat: Number(this.lat),
                // lng: Number(this.lng),
                status: this.status,
                videourl: this.videourl,
                websiteurl: this.websiteurl,
                bgImg: this.bgImg,
                logo: this.logo,
                phone: this.phone,
                email: this.email,
                description: this.description,
                _id: this.wineryId
            }
            console.log(winery)
            api.updateWinery(winery)
                .then(updatedWinery => {
                    const indexOfWinery = this.wineries.findIndex(winery => winery._id === updatedWinery._id )
                    this.wineries.splice(indexOfWinery,1, updatedWinery)
                })
        }
    }
})

export default app 