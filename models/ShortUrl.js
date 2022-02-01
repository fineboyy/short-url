const mongoose = require("mongoose")
const shortid = require("shortid")


const ClickSchema = new mongoose.Schema({
    time: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: String
    }
})


const ShortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: [ClickSchema]

})





mongoose.model('ShortUrl', ShortUrlSchema)
mongoose.model('Click', ClickSchema)
