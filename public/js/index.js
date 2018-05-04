// creating new burger
$("#addBurger").on("click", function(event){
    event.preventDefault();
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
    })
})

