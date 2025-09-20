// Database-related utilities,
// such as connecting, disconnecting, seeding, and deleting from the database 

const { default: mongoose } = require("mongoose");
const { Book } = require("../models/BookModel");
const { Author } = require("../models/AuthorModel");



async function dbConnect(){
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/SuperCoolExampleDatabase");
		console.log("Database connected!");
	} catch (error) {
		console.log("Database connection failed!\n" + JSON.stringify(error));
	}
}


async function dbClose(){
	await mongoose.connection.close();
	console.log("Database disconnected!");
}


async function dbSandbox(){
	await dbConnect();

	let hgttg = new Book({
		title: "Hitchhiker's Guide to the Galaxy",
		author: [
			"Douglas Adams"
		],
		series: "Hitchhiker's Guide to the Galaxy"
	});

	await hgttg.save();
	console.log(hgttg);

	await dbClose();
}

module.exports = {
	dbConnect, dbClose
}

// dbSandbox();

// console.log("file will end after this log");