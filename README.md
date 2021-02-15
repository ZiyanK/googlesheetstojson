# googlesheetstojson

A package to read Google Sheets data and convert to JSON without publishing to web

## Installation

```bash
$ npm install googlesheetstojson
```

## Example 

```js
const { JSONFromURL, JSONFromSheetID } = require("googlesheetstojson");

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
```

## Contributions

- Feel Free to create a PR/Issue for any feature or bug(s).
- Make sure you follow the community guidelines!
- Have a feature request? Open an Issue!