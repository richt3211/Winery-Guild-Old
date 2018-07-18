const Winery = require('../models/winery')

module.exports = {
    addWinery: (req,res,next) => {
        Winery.create({
            permalink: req.body.permalink,
            wineryName: req.body.wineryname,
            wineryOwner: req.body.wineryowner,
            permitNumber: req.body.permitnumber,
            street: req.body.street,
            city: req.body.street,
            state: req.body.state,
            zipcode: req.body.zipcode,
            county: req.body.count,
            lat: req.body.lat,
            lng: req.body.lng,
            status: req.body.status,
            videoUrl: req.body.videoUrl,
            websiteUrl: req.body.websiteUrl,
            phone: req.body.phone,
            email: req.body.email,
            description: req.body.description,
        })
        .then(winery => res.status(201).json(winery))
        .catch(e => {
            req.error = e
            next()
        })
    },
    editWinery: (req,res,next) => {
        Winery.findById(req.params.id, (err, winery) => {
            if (err) {
                res.status(404).send()
                return
            }
            console.log(winery)
            const id = req.params.id
            winery.logo = `/${id}/logo.jpg`
            winery.background = `/${id}/background.jpg`

            console.log(req.body)
            console.log("logging the winery", winery)
            for (bodyKey in req.body) {
                for (wineryKey in winery) {
                    if (winery.hasOwnProperty(wineryKey)) {
                        // console.log(`${wineryKey}: ${winery[wineryKey]}`)
                    }
                }
                console.log(`${bodyKey}: ${req.body[bodyKey]}`)
            }
            winery.wineryname = req.body.wineryname
            winery.status = req.body.status
            winery.videourl = req.body.videourl
            winery.websiteurl = req.body.websiteurl
            winery.description = req.body.description
            winery.phone = req.body.phone
            winery.email = req.body.email
            return winery.save()
        })
            .then(winery => res.json(winery))
            .catch( e => {
                req.error = e
                next()
            })

    },

}
