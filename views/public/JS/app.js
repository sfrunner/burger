//Submit Event Listener
$(document).ready(function () {

    $("#submit-btn").on("click", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };
        console.log(burgerData);
        $.post("/index", burgerData).done(function (data) {
            console.log(data);
        });
    });
});