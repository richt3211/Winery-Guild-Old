const json2csv = require('json2csv')

module.exports = {
    template: (req, res) => {
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
    }
}