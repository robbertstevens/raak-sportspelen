document.addEventListener("DOMContentLoaded", main);

function main()
{
    initializeButtons();
}

function initializeButtons()
{
	var buttons = document.getElementsByTagName('a');
    for (var i = buttons.length - 1; i >= 0; i--) {
    	console.log(buttons[i]);
    	buttons[i].addEventListener("touchstart",function(e){
		    //e.preventDefault();		    
		    for (var i = buttons.length - 1; i >= 0; i--) {
		    		buttons[i].classList.add('tapped');
		    }
    	}, false);
	    	buttons[i].addEventListener("touchend", function(e){
	    	//e.preventDefault();
	    	for (var i = buttons.length - 1; i >= 0; i--) {
	    		buttons[i].classList.remove('tapped');
	    	}
    	}, false); 
    }    
}