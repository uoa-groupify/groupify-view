function loadjscssfile(filename, filetype) {
	if (filetype == "js") {
		var fileref = document.createElement("script");
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
		alert("called");
	} else if (filetype == "css") {
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref);
}

var date = new Date();
var timestamp = date.getTime();
loadjscssfile("../assets/styles/style.css?timestamp=" + timestamp, "css");
