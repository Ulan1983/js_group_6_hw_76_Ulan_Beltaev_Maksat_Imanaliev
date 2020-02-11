const fs = require('fs');
const nanoid = require('nanoid');

const filename = './msg.json';

let data = [];

module.exports = {
	init() {
		try {
			const fileContents = fs.readFileSync(filename);
			data = JSON.parse(fileContents.toString());
		} catch (e) {
			console.log('Could not read file ' + filename);
			data = [];
		}
	},

	getItems() {
		return data.slice(-30).reverse();
	},

	addItem(item) {
		item.id = nanoid();
		item.datetime = new Date().toISOString();
		data.push(item);
		this.save();
	},
	save() {
		const fileContents = JSON.stringify(data, null, 2);
		fs.writeFileSync(filename, fileContents);
	}
};