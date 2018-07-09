const json2csv = require('json2csv')
const csv = require('fast-csv')
const mongoose = require('mongoose')
const Winery = require('../models/winery')

module.exports = {
    get: (req, res) => {
        const fields = [
            'winername',
            'wineryowner',
            'permitnumber',
            'street',
            'city',
            'state',
            'zipcode',
            'county',
            'lat',
            'lng',
        ]
        const csv = json2csv({data: '', fields: fields})
        res.set("Content-Disposition", "attachment;filename=authors")
        res.set("Content-Type", "application/octet-stream")

        res.send(csv)
    },
    post: (req, res) => {
        if (!req.files)
            return res.status(400).send('No files were uploaded')
        console.log(req.files.file)
        const wineryFile = req.files.file
        const wineries = []

        csv
          .fromString(wineryFile.data.toString(),{
                headers: true,
            })
            .on('data', (data) => {
                data['_id'] = new mongoose.Types.ObjectId()
                wineries.push(data)
            })
            .on('end', data => {
                Winery.create(wineries, (err, documents) => {
                    if (err) throw err
                })
            })
            res.send(wineries.length + 'wineries have been succesfully uploaded ')
    }
}