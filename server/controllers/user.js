const Winery = require('../models/winery')

module.exports = {
    getWineries: (req, res, next) => {

        Winery.find(req.query)
        .then(wineries => {
            return res.status(200).json(wineries)
        })
        .catch( e => {
            req.error = e
            next()
        })

    },
    getFilter: (req, res, next) => {
        const query = req.query
        const queryLength = Object.keys(query).length
        var filter = ''
        if (queryLength === 0) {
            filter = 'state'
        }
        else if ( queryLength === 1){
            filter = 'county'
        }
        else if ( queryLength === 2) {
            filter = 'city'
        }
        Winery.find(query).distinct(filter)
        .then(filter => {
            console.log(filter)
            filter.sort()
            return res.status(200).json(filter)
        })
        .catch ( e => {
            req.error = e
            next()
        })
        
    },
    editAllWineries: (req,res, next) => {
        Winery.find({})
        .then( wineries => {
            console.log(wineries)
            for (var winery of wineries) {
                name = winery.wineryname.toUpperCase()
                winery.wineryname = name
                winery.save()

            }
            return res.status(200).json(wineries)
            
        })
        .catch ( e => {
            req.error = e
            next()
        })
    }

    
}