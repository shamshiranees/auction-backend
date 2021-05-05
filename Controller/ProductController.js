var express = require('express');
var router = express.Router();
var client = require("../connection/connect")();

client.on('connect', () => {
    console.log("connected to redis");
})

var routes = function () {
    
    router.route('/')
        .get(function (req, res) {
              console.log('Hi');  
              client.hmget("Auctions","20001",function(err,obj){
                res.json(obj);
            });            
        });

    router.route('/')
        .post(function (req, res) {
            res.status(200).send("Success");
        });


    router.route('/:id')
        .put(function (req, res) {
            
                            res.status(200).send("put");
                        
        });        

    return router;
};
module.exports = routes;