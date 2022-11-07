function showStatus(msg) {
	window.status = msg;
	return true;
}



function openWindow(url, name, width, height, options) {
	var winoptions = "'width="+this.width+",height="+this.height+"'";
	var newWin = window.open(url, name, winoptions);
	
}

function openBridge(URL) {
	openWindow(URL,'clickthrough', 400,500,'scrollbars=1,menubar=0,toolbar=0,location=0,status=0,resizable=1');
}

function showEvents(URL) {
	openWindow(URL,'events', 400,500,'scrollbars=1,menubar=0,toolbar=0,location=0,status=0,resizable=1');
}