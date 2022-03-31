$(function(){

    AOS.init({
        duration: 1400,
    });
    
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });


    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });

    AOS.refresh();
});