const express = require('express');
const routes = express.Router();
const axios = require('axios');

APIKey = "2b164376f29a1417f6e2dbb7b262f08d";

routes.get("/current/:currentPosition", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("router sending API request");
    axios.get('http://api.openweathermap.org/data/2.5/weather?' + req.params.currentPosition + '&APPID=' + APIKey)
        .then(response => {
            res.status(200).send(response.JSON);
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = routes; 