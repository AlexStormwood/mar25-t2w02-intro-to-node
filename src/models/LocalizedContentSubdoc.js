const { default: mongoose } = require("mongoose");


const LocalizedContentSchema = mongoose.Schema({
	content: String,
	language: String
});

module.exports = {LocalizedContentSchema}