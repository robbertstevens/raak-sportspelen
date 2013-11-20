document.addEventListener("DOMContentLoaded", main);

function main()
{
    initializeButtons();
}

function initializeButtons()
{
	var buttons = document.getElementsByTagName('a');
    for (var i = buttons.length - 1; i >= 0; i--) {
    	buttons[i].addEventListener("touchstart", this.tapped, false);
    	buttons[i].addEventListener("touchend", this.untapped, false);    	
    };

    this.tapped = function(){
    	for (var i = buttons.length - 1; i >= 0; i--) {
    		buttons[i].classList.add('tapped');
    	};
    };

    this.untapped = function(){
    	for (var i = buttons.length - 1; i >= 0; i--) {
    		buttons[i].classList.remove('tapped');
    	};
    };
}