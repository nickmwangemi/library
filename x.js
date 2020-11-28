let myLibrary = [
	(book1 = {
		title: 'Awesome Book',
		author: 'Awesome Author',
		pages: 400,
		read: true,
	}),
	(book2 = {
		title: 'Awesome Book',
		author: 'Awesome Author',
		pages: 400,
		read: false,
	}),
]

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${
		this.read ? 'read.' : 'not read yet.'
	}`
}

const addBookToLibrary = (bookToSave) => {
	myLibrary.push(bookToSave)
	return `${this.title} has been added to the library`
}

const showBooks = () => {
	myLibrary.map((book) => console.log(book))
}

const test = new Book('test', 'test', 500, true)
addBookToLibrary(test)

showBooks()
console.log(myLibrary)
