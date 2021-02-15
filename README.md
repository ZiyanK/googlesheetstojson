# googlesheetstojson

![banner](assets/banner.png)

An npm package to read Google Sheets data and convert it to JSON without publishing it to the web. Simply change Share access to "Anyone with the link can View".

Give a ⭐ if you found this package interesting!

## Why is it different

It is not required to "Publish to Web" in order for this package to work. Simply change Share access and it is ready to go. 

## Installation

```bash
$ npm install googlesheetstojson
```

## Usage 

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

## License

This package is licensed under [MIT](https://github.com/ZiyanK/googlesheetstojson/blob/master/LICENSE)
