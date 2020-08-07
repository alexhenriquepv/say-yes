$(document).ready(function () {
    $('.ico-heart').click(function () {
        $('.container').addClass('open');
    });


    $('.close').click(function () {
        $('.container').removeClass('open');
    });
});