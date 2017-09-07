(function() {
    
    var changeTextColor = function(e) {
        eventObject.preventDefault(e);

        var elem = eventObject.getTarget(e),
            colorData = elem.getAttribute('data-color');

        if( colorData ) {
            document.body.className = colorData;
        }
    };

    eventObject.addEvent(document, 'click', changeTextColor );

})();