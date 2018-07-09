const csv = require('fast-csv')
const mongoose = require('mongoose')
const Winery = require('../models/winery')

mondule.exports = {
    post: (req, res) => {
        if (!req.files)
            return res.status(400).send('No files were uploaded')
        
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