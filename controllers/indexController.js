var express = require('express');
const mongoose = require("mongoose")

require("../models/ShortUrl")

const Click = mongoose.model("Click")
const ShortUrl = mongoose.model("ShortUrl")



async function getHomePage (req, res, next) {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls, title: "TiniFy" });
}

async function createNewUrl({ body, params }, res) {

    const url = await new ShortUrl

    url.fullUrl = body.fullUrl

    url.save((err, newUrl) => {
        console.log(newUrl)
        res.redirect("/")
    })
}



module.exports = {
    getHomePage,
    createNewUrl
}