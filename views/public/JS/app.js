//Submit Event Listener
$(document).ready(function () {


    $("#submit-btn").one("click", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };
        $.post("/", burgerData).done(function (data) {
        });
        
    });

    function getcall() {
        $.get("/").done(function (data) {
            var HTML = $.parseHTML(data,document,true);
            var bodyHTML = HTML[15].innerHTML
            console.log(HTML);
            $(".container-fluid").html(bodyHTML);
        });
    }
});