//when you click the button
$(".btn btn-primary").on(click,function(){
    //burger name goes under devoured section
    //send ajax put request to server
    //pass id of button
    var id = $(this).data("id")
    $.ajax({
        url: "/api/burgers/:id",
        type: "PUT",
        data: "id",
        success: function(data){
            console.log(data)
        },
    });
});

