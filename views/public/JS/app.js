//Submit Event Listener
$(document).ready(function () {


    $("#submit-btn").on("click", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };
        console.log(burgerData);
        $.post("/", burgerData).done(function (data) {
            getcall();
        });
        
    });

    $(".devour-btn").on("click", function (event) {
        //var burgerID = event.target.id;
        //$.put("/index/update/" + burgerID).done(function (data) {
            getcall(); 
        //});
    });

    $(".eaten").on("click", function (event) {
        //var burgerID = event.target.id;
        //$.post("/index/delete/" + burgerID.replace("burger-", "")).done(function (data) {
        getcall();
        //});
    });

    function getcall() {
        $.get("/").done(function (data) {
            console.log(data);
            $("body").html(data);
        });
    }
});