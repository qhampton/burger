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

router.post("/api/burgers", function (req, res) {
    burger.enter([
        req.body.burger_name
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404 - how to throw an error for users side now
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js to use.
module.exports = router;