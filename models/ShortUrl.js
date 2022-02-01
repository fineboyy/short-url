const mongoose = require("mongoose")
const shortid = require("shortid")

const UrlSchema = new mongoose.Schema({
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


const ClickSchema = new mongoose.Schema({
    time: {
        type: Date
    },
    location: {
        type: String
    }
})
