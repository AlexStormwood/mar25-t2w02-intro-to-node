const express = require("express");
const { Book } = require("../models/BookModel");
const router = express.Router();

// GET all books from the database
router.get("/", async (request, response) => {
	let results = await Book.find();
	response.json({
		data: results
	});
});

// GET one book by ID
// http://localhost:5432/books/id/oajsndfalfksnaflka
router.get("/id/:id", async (request, response) => {
	let results = await Book.findById(request.params.id);
	response.json({
		data: results
	});
});

// GET one book by ID
// http://localhost:5432/books/search?title=Bananas&author=Some%20Cool%20Guy
router.get("/search", async (request, response) => {

	console.log(request.query);

	let results = await Book.find(request.query)

	response.json({
		message:"search endpoint activated!",
		queryData: request.query,
		data: results
	});
	// let results = await Book.findById(request.params.id);
	// response.json({
	// 	data: results
	// });
});

// module.exports = {router};
// module.exports = {
// 	booksController: router
// }
module.exports = router;