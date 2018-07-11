const Winery = require('../models/winery')

module.exports = {
    //This is the function the router calls to add a winery to the database
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
    //This is the function the router calls to list all of the wineries in the database
    listWineries: (req, res, next) => {
        Winery.find(req.query)
        .then(wineries => {
            return res.status(200).json(wineries)
        })
        .catch( e => {
            req.error = e
            next()
        })

    },
    editWinery: (req,res,next) => {
        console.log(req.params.id)
        Winery.findById(req.params.id, (err, winery) => {
            if (err) {
                res.status(404).send()
                return
            }
            console.log(winery)
            winery.status = req.body.status
            console.log(req.body.videourl)
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

        // Winery.findById(req.params.id)
        //     .then(winery => {
        //         console.log(winery)
        //         if (winery === null) {
        //             console.log("winery is null")
        //             res.status(404).send()
        //             return
        //         }
        //         winery.status = req.body.status
        //         winery.videourl = req.body.videourl
        //         winery.websiteurl = req.body.websiteurl
        //         winery.description = req.body.description
        //         winery.phone = req.body.phone
        //         winery.email = req.body.email
        //         return expense.save()
        //     })
        //     .then(winery => res.json(winery))
        //     .catch(e => {
        //         req.error = e
        //         next()
        //     })
    }
}