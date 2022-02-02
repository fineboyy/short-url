var express = require('express');
const mongoose = require("mongoose")

require("../models/ShortUrl")

const Click = mongoose.model("Click")
const ShortUrl = mongoose.model("ShortUrl")



async function getHomePage (req, res, next) {
    const shortUrls = await ShortUrl.find()
    return res.render('index', { shortUrls: shortUrls, title: "TiniFy" });
}

async function createNewUrl({ body, params }, res) {

    const url = await new ShortUrl

    url.fullUrl = body.fullUrl

    url.save((err, newUrl) => {
        console.log(newUrl)
        return res.redirect("/")
    })
}


function redirectUrl({params}, res) {
    let url = params.short_url

    ShortUrl.findOne({shortUrl: url}, (err, foundUrl) => {
        if(err) return res.send(err)

        let fullUrl = foundUrl.fullUrl
        return res.redirect(fullUrl)
    })
}




module.exports = {
    getHomePage,
    createNewUrl,
    redirectUrl
}