(function(){
    var buttons = document.getElementsByTagName('button');

    for(var i = 0, len = buttons.length; i < len; i++) {

        buttons[i].onclick = function() {
            if (this.id === 'b') {
                document.body.className = 'black';
            } else if (this.id === 'w') {
                document.body.className = 'white';
            }

        };
    }

})();