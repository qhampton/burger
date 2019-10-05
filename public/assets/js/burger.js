//when you click the button
$(document).on("submit", ".create-form", function(e){
    e.preventDefault();
    console.log("yay");
    //burger name goes under devoured section
    //send ajax put request to server
    //pass id of button
    var burger = $(this).find("input[type=text]").val();
    console.log (burger);
    $.post('/api/burgers/' + burger, {username: "Pancho", pass: 123}, function(data){
        console.log(data);
    });
});


console.log("hi");