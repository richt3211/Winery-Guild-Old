const mongoose = require('mongoose')


//The winery schema
const winerySchema = mongoose.Schema ({
    wineryname: String,
    wineryowner: String,
    permitnumber: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    county: String,
    lat: Number,
    lng: Number,
    status: String,
    videourl: String,
    websiteurl: String,
    logo: { data: Buffer, contentType: String },
    bgImg: { data: Buffer, contentType: String },
    description: String,
    phone: String,
    email: String,
    
})

module.exports = mongoose.model('Winery', winerySchema) //exporting the schema as 'Winery'