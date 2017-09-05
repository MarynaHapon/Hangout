$(window).ready(function(){
    var windowHeight = $(window).height();

    $('.slide')
        .height(windowHeight)
        .scrollie({
            scrollOffset: -50,
            scrollingInView: function (elem) {
                var backgroundColor = elem.data('background');
                $('body').css('background-color', backgroundColor);
            }
        });

});