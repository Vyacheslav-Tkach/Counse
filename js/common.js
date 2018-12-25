$(window).scroll(function() {

    var st = $(this).scrollTop();
    $(".header-text").css({
        "transform" : "translate(0%, " + st /-6 + "%"
    });

    var st = $(this).scrollTop();
    $(".carousel-control-prev , .carousel-control-next").css({
        "transform" : "translate(0%, " + st /-14 + "%"
    });
    
    var st = $(this).scrollTop();
    $(".row-header").css({
        "transform" : "translate(0%, " + st /-1 + "%"
    });
  
});


