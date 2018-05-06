// creating new burger
$(".create-form").on("submit", function(event){
    debugger
    event.preventDefault();
    console.log("clicked");
    alert("added new burger");
    // grabbing input from input
    var newBurger = {
        name:$("#newBurgerName").val().trim()
    }
    console.log($("#newBurgerName").val().trim());
    //sending post request
    $.ajax("/api/burgers", {
        type: "POST",
        data:newBurger
    }).then(function(){
        console.log("added new burger");
        location.reload();
    })
})

