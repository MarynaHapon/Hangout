(function(){
    var buttons = document.getElementsByTagName('button');

    for(var i = 0, len = buttons.length; i < len; i++) {

        buttons[i].onclick = function() {
            if (this.id === 'btn-black') {
                document.body.className = 'black';
            } else if (this.id === 'btn-white') {
                document.body.className = 'white';
            }

        };
    }

})();