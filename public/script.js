var menu =  document.getElementById("menu");
var tile = document.getElementsByClassName("tile");
var multiCheck = document.getElementsByClassName("btn");
var spaces = document.getElementsByClassName("space");

for (z = 0; z<multiCheck.length;z++) {
    multiCheck[z].addEventListener("click",function() {checkLine(this);})
};
document.getElementById("vertical").addEventListener("click", function() {mark("vertical");});
document.getElementById("horizontal").addEventListener("click", function() {mark("horizontal");});

document.getElementById("ulCorn").addEventListener("click", function() {mark("ulCorn");});
document.getElementById("urCorn").addEventListener("click", function() {mark("urCorn");});
document.getElementById("llCorn").addEventListener("click", function() {mark("llCorn");});
document.getElementById("lrCorn").addEventListener("click", function() {mark("lrCorn");});
document.getElementById("lT").addEventListener("click", function() {mark("lT");});
document.getElementById("rT").addEventListener("click", function() {mark("rT");});
document.getElementById("uT").addEventListener("click", function() {mark("uT");});
document.getElementById("dT").addEventListener("click", function() {mark("dT");});
document.getElementById("cross").addEventListener("click", function() {mark("cross");});

document.getElementById("L").addEventListener("click", function() {mark("L");});
document.getElementById("M").addEventListener("click", function() {mark("M");});
document.getElementById("D").addEventListener("click", function() {mark("D");});
document.getElementById("ur").addEventListener("click", function() {mark("ur");});
document.getElementById("d").addEventListener("click", function() {mark("d");});
document.getElementById("l").addEventListener("click", function() {mark("l");});
document.getElementById("u").addEventListener("click", function() {mark("u");});
document.getElementById("r").addEventListener("click", function() {mark("r");});
document.getElementById("ll").addEventListener("click", function() {mark("ll");});
document.getElementById("lr").addEventListener("click", function() {mark("lr");});
document.getElementById("ul").addEventListener("click", function() {mark("ul");});
document.getElementById("hero").addEventListener("click", function() {mark("hero");});
document.getElementById("enemy").addEventListener("click", function() {mark("enemy");});
document.getElementById("npc").addEventListener("click", function() {mark("npc");});
document.getElementById("town").addEventListener("click", function() {mark("town");});
document.getElementById("close").addEventListener("click",menuIt);
document.getElementById("swamp").addEventListener("click", function() {color("swamp");});
document.getElementById("barren").addEventListener("click",function(){color("barren");});
document.getElementById("clear").addEventListener("click", function() {color("clear");});
document.getElementById("mountains").addEventListener("click", function() {color("mountains");});
document.getElementById("forest").addEventListener("click", function() {color("forest");});
document.getElementById("trail").addEventListener("click", function() {color("trail");});
document.getElementById("water").addEventListener("click", function() {color("water");});
document.getElementById("grassland").addEventListener("click", function() {color("grassland");});
document.getElementById("desert").addEventListener("click", function() {color("desert");});
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("fill").addEventListener("click", fill);
document.getElementById("menuOpenHeader").addEventListener("click",menuIt);
document.getElementById("markerOpen").addEventListener("click", markers);

for (var p = 0; p<tile.length; p++) {
    tile[p].addEventListener("click",resetChecks);
}

dragElement(document.getElementById("menuOpenHeader"));

function checkLine(line) {
    var checker = line.getAttribute("id");
    for (var t =0;t<tile.length;t++){
	var check = tile[t].classList;
	for (var v = 0; v<check.length;v++) {
	    if (check[v] == checker) {
		if (tile[t].checked === false) {
		    tile[t].checked = true;
		} else {
		    tile[t].checked = false;
		}
	    }
	}
    }
}


function invert() {
    for (var y = 0; y<tile.length;y++) {
	if(tile[y].checked === true) {
	    tile[y].checked = false;
	} else {
	    tile[y].checked =true;
	}
    }
}

function resetChecks() {
    if (document.getElementById("fill").innerHTML === "Uncheck All") {
	document.getElementById("fill").innerHTML = "Check All";
    }
}

function markers() {
    if(document.getElementById("menuTitle").innerHTML === "Terrain Menu") {
	document.getElementById("menuTitle").innerHTML = "Marker Menu";
	document.getElementById("menu").className = "markers";
	document.getElementById("markerOpen").innerHTML = "Terrain";
	document.getElementById("selector").style.visibility="hidden";
	document.getElementById("selectas").style.visibility="visible";
    } else {
	document.getElementById("menuTitle").innerHTML = "Terrain Menu";
	document.getElementById("menu").className = "menu";
	document.getElementById("markerOpen").innerHTML = "Markers";
	document.getElementById("selector").style.visibility="visible";
	document.getElementById("selectas").style.visibility="hidden";
    }
}

function menuIt() {
    if(menu.style.visibility === "visible") {
	menu.style.visibility = "hidden";
	document.getElementById("menuOpen").innerHTML = "Menu";
	document.getElementById("selector").style.visibility="hidden";
	document.getElementById("selectas").style.visibility="hidden";
    } else {
    	menu.style.visibility = "visible";
	document.getElementById("menuOpen").innerHTML = "Close";
	if (document.getElementById("menuTitle").innerHTML === "Terrain Menu") {
	    document.getElementById("selector").style.visibility="visible";
	    document.getElementById("selectas").style.visibility="hidden";
	} else { 
	    document.getElementById("selectas").style.visibility="visible";
	    document.getElementById("selector").style.visibility="hidden";
	}
    }
}
    
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
	e = e || window.event;
	e.preventDefault();
	// get the mouse cursor position at startup:
	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onmouseup = closeDragElement;
	// call a function whenever the cursor moves:
	document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
	e = e || window.event;
	e.preventDefault();
	// calculate the new cursor position:
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	// set the element's new position:
	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
	// stop moving when mouse button is released:
	document.onmouseup = null;
	document.onmousemove = null;
    }
}

function fill() {
    var fillIt = document.getElementById("fill");
    if (fillIt.innerHTML==="Check All") {
	fillIt.innerHTML="Uncheck All";
	for (var o=0;o  < tile.length;o++) {
	    tile[o].checked = true;
	};
    } else {
	fillIt.innerHTML="Check All";
	for (var o=0;o  < tile.length;o++) {
	    tile[o].checked = false;
	};
    }
}

function empty() {
    for (var o=0;o  < tile.length;o++) {
	tile[o].checked = false;
    }
}

function menuLeave() {
    menu.style.visibility="hidden";
    for (var i = 0; i < tile.length; i++) {
	tile[i].checked = false;
    };
};

var gridColor;

function color(type) {
    var colorIt = document.getElementById(type);
    var coloring = colorIt.getAttribute("value");
    console.log(colorIt);
    for (var j = 0; j < tile.length; j++) {
	if (tile[j].checked) {
	    gridColor = tile[j].getAttribute("name");
	    document.getElementById(gridColor).style.backgroundColor = coloring;
	}
    }
};

function mark(type) {
    var markIt = document.getElementById(type);
    var marking = markIt.getAttribute("value");
    console.log(markIt);
    for (var j = 0; j < tile.length; j++) {
	if (tile[j].checked) {
	    gridColor = tile[j].getAttribute("name");
	    document.getElementById(gridColor).innerHTML = marking;
	}
    }
};
