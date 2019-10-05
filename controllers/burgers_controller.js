var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function (req, res) {
    burger.showAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        //sending from back to front
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers/:burger_name", function (req, res) {
    console.log("PARAMS: ", req.params.burger_name);
    console.log("BODY: ", req.body);
    burger.enter(
        req.params.burger_name, 
        function (result) {
        // Send back the ID of the new quote
        res.json({
            data: result
        });
    });
});


// Export routes for server.js to use.
module.exports = router;