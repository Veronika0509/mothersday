$(window).scroll(function() {
    $('.left').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInLeft");
        }
    });
});

$(window).scroll(function() {
    $('.up').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInUp");
        }
    });
});

$(window).scroll(function() {
    $('.down').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInDown");
        }
    });
});

$(window).scroll(function() {
    $('.right').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInRight");
        }
    });
});

$(window).scroll(function() {
    $('.rubberBand').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__rubberBand");
        }
    });
});