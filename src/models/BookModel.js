const { default: mongoose } = require("mongoose");


const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		// unique: true
	},
	isbn: [{
		type: String,
		unique: true
	}],
	author: [String],
	series: String
});


const Book = mongoose.model(
	// model name
	"Book", 

	// model schema
	BookSchema
);

// const Book = mongoose.model("Book", BookSchema);

module.exports = {
	Book, // model
	BookSchema // schema
}

// const Book = mongoose.model("Book", {})