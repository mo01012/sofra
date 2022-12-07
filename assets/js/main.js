$(document).ready(function() {
    $(".link").click(function(e) {
        e.preventDefault();
        $("aside").slideToggle("slow");
    })
    var x = $(document).height();
    // $("aside").after().css("height", x);
    $("aside").after().click(function() {
        $("aside").slideUp("slow");
    })
    console.log(x)
});