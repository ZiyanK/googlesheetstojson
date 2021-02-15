const { getCorrectURL , getData} = require("./helper");
 
const JSONFromURL = async (url) => {
	url = getCorrectURL(url);
	scrapedData = await getData(url);	
	return scrapedData;
}

const JSONFromSheetID = async (id) => {
	url = `https://docs.google.com/spreadsheets/d/${id}/htmlview#gid=0`;
	scrapedData = await getData(url);	
	return scrapedData;
}

module.exports = {
	JSONFromURL,
	JSONFromSheetID
}