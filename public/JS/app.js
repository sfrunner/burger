$(document).ready(function (){
    $("body").on("click", "#submit-btn", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };

        // don't need to change anything and this will work.
        $.post("/", burgerData).done(function (data) {
            var HTML = $.parseHTML(data, document, true);
            var bodyHTML = HTML[15].innerHTML
            $(".container-fluid").html(bodyHTML);
        });

        // if you send back a path to redirect to, then you can do this (bit simpler than the above option)
        // $.post("/", burgerData).done(function (data) {
        //     data.redirect && ( window.location = data.redirect )
        // });

    });

});