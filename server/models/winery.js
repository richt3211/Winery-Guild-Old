const mongoose = require('mongoose')


//The winery schema
const winerySchema = mongoose.Schema ({
    wineryName: String,
    wineryOwner: String,
    permitNumber: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    county: String,
    lat: Number,
    lng: Number,
    status: String,
    videoUrl: String,
    websiteUrl: String,
    description: String,
    phone: String,
    email: String,
    logo: {
        filename: String,
        path: String,
    },
    backgroundImage: {
        filename: String,
        path: String,
    }
    
    
})
module.exports = mongoose.model('Winery', winerySchema) //exporting the schema as 'Winery'