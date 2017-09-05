(function () {

    var circle = document.getElementById('header-circle'),
        style = circle.style,
        delay = 10,
        i = 0,
        bottom = circle.offsetTop;
    //style = circle[0].style;
    style.transition= "2s";

    var startTimer = function() {
        style.backgroundColor= "#ffffff";
    };

    //setTimeout(startTimer, 3000);


    var startTimer2 = function(pix) {

        if( i < 10) {
            //console.log('ok');
            //setTimeout(startTimer2, delay);
            circle.style.top = bottom + pix + 'px';
        } else {
            clearInterval(timer);
        }
        i++;
    };

    var timer = setInterval(function () {
        startTimer2(60);
    }, delay);


})();