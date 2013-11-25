document.addEventListener("DOMContentLoaded", main);

function main()
{
    initializeButtons();    
    var canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    cb = new CoachBoard(canvas);

    document.getElementById('clearButton').addEventListener('touchend', function(e){
        cb.clear(true);
    });
     document.getElementById('rectangleButton').addEventListener('touchend', function(e){
        cb.setShapeType("rectangle");
        console.log
    });  
     document.getElementById('fixedLineButton').addEventListener('touchend', function(e){
        cb.setShapeType("fixedLine");
        console.log
    });         
}

function initializeButtons()
{
	var buttons = document.getElementsByTagName('a');
    for (var i = buttons.length - 1; i >= 0; i--) {
    	console.log(buttons[i]);
    	buttons[i].addEventListener("touchstart",function(e){
		    //e.preventDefault();
		    this.classList.add('tapped');		    
    	}, false);
	    	buttons[i].addEventListener("touchend", function(e){
	    	//e.preventDefault();	    	
	    	this.classList.remove('tapped');	    	
    	}, false); 
    }

}