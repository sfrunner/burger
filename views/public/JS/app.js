//Submit Event Listener
$(document).ready(function () {


    $("#submit-btn").on("click", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };
        console.log(burgerData);
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