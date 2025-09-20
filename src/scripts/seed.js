const { Author } = require("../models/AuthorModel");
const { Book } = require("../models/BookModel");
const { dbConnect, dbClose } = require("../utils/database");


async function seed(){
	// 1. Connect to the DB
	await dbConnect();

	// 2. Start seeding stuff into the DB

	let authorsData = [
		{
			name: "Douglas Adams",
			bio: "Real funny scifi author."
		},
		{
			name: "Some Punny Guy"
		}
	];


	let authorSeedResult = await Author.insertMany(authorsData);

	let douglasAdams = await Author.findOne({name: "Douglas Adams"});
	let somePunnyGuy = await Author.findOne({name: "Some Punny Guy"});

	let booksData = [
		{
			title: "Hitchhiker's Guide to the Galaxy",
			author: [
				douglasAdams.id
			],
			isbn: ["bananas", "bananas2"],
			series: "Hitchhiker's Guide to the Galaxy"
		},
		{
			title: "Some Cool Book About Puns",
			author: [
				somePunnyGuy.id
			],
			isbn: ["mango"],
			series: "Very Serious Collection of Very Funny Jokes"
		},
	];

	let seedResult = await Book.insertMany(booksData);

	console.log(seedResult);

	// 3. Disconnect from the DB
	await dbClose();
}

// 4. Make sure the script actually runs the function configured here!
seed();