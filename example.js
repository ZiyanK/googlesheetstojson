const { JSONFromURL, JSONFromSheetID } = require("./index");

const URLexample = async (url) => {
	data = await JSONFromURL(url);
	console.log(data);
}

const IDexample = async (id) => {
	data = await JSONFromSheetID(id);
	console.log(data);
}

URLexample("https://docs.google.com/spreadsheets/d/13WicsCYCAI8SwP_g8n7hiwb4BAEBZ0cJDBfGqGuZBwU/edit#gid=0");
IDexample("13WicsCYCAI8SwP_g8n7hiwb4BAEBZ0cJDBfGqGuZBwU")