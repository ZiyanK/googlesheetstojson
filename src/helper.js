const request = require("request-promise");
const cheerio = require("cheerio");

const getCorrectURL = (url) => {
	url = url.replace('edit', 'htmlview');
	return url;
}

const getData = async (url) => {
	const result = await request.get(url);
	const $ = cheerio.load(result);
	const scrapedData = [];
	const tableHeaders = [];
	$($(".waffle")).find("tbody > tr").each((index, element) => {
		if (index === 0) {
			const ths = $(element).find("td");
			$(ths).each((_, element) => {
				tableHeaders.push(
					$(element)
					.text()
					.toLowerCase()
				);
			});
			return true;
		}
		const tds = $(element).find("td");
		const tableRow = {};
		$(tds).each((i, element) => {
			tableRow[tableHeaders[i]] = $(element).text();
		});
		scrapedData.push(tableRow);
	});
	return scrapedData;
}

module.exports = {
	getCorrectURL,
	getData
}