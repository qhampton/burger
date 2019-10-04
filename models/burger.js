var orm = require("../config/orm.js");

burger = {
    //selectAll
    showAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    //insertOne
    enter: function(val,cb){
        orm.insertOne("burgers","burger_name",val,function(res){
            cb(res);
        });
    },
    //updateOne
    update: function(itemId,cb){
        orm.updateOne("burgers","devoured",true,itemId,function(res){
            cb(res);
        });
    }
}
// Export the database functions for the controller
module.exports = burger;