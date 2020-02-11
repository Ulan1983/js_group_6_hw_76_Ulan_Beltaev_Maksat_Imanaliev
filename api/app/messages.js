const express = require('express');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
	const items = fileDb.getItems();
	res.send(items);
});

router.post('/', (req, res) => {
	if (req.body.author.length === 0 || req.body.message.length === 0) {
		res.status(400).send({"error": "Author and message must be present in the request"})
	} else {
		fileDb.addItem(req.body);
		res.send(req.body);
	}
});

module.exports = router;