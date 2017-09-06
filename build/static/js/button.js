(function() {

    var buttons = document.getElementsByTagName('button');

    var changeTextColor = function(e) {
        eventObject.preventDefault(e);

        var elem = eventObject.getTarget(e);

        if (elem.id === 'btn-black') {
            document.body.className = 'black';
        } else if (elem.id === 'btn-white') {
            document.body.className = 'white';
        }
    };

    for(var i = 0, len = buttons.length; i < len; i++) {

        eventObject.addEvent(buttons[i], 'click', changeTextColor);

    }

})();