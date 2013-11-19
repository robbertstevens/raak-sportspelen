document.addEventListener("DOMContentLoaded", main);

function main()
{
    var app = new application();
    //.addScene(new menuScene(true, "MenuScene"));
 	app.start();

}

function application() {
	var scenes = [];
	this.addScene = function(scene) {
		scenes.push(scene);
		
	};
	this.start = function() {
		for(var i = 0; i < scenes.length; i++) {
			if (scenes[i].active)
				scenes[i].draw();
		}
	};
}