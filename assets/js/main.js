$(document).ready(function() {
    $("aside").hide();
    $(".link").click(function(e) {
        e.preventDefault();
        $("aside").slideToggle("slow");
    })

    $("aside").after().click(function() {
        $("aside").slideUp("slow");
    })
    $('.owl-carousel').owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $(".hover").mouseenter(function() {
        $(this).children("p").removeClass("d-none");
    })
    $(".hover").mouseleave(function() {
        $(this).children("p").addClass("d-none");
    })
});