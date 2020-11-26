let myLibrary = []

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

Book.prototype.addBookToLibrary = function (book) {
	book = new Book(this.title, this.author, this.pages, this.read)
	myLibrary.push(book)
	return `${book.title} has been added to the library.`
}

// target root div
const app = document.querySelector('#root') // access our root div
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// show form
const addButton = document.querySelector('#add-book')
addButton.addEventListener('click', (e) => {
	const form = document.querySelector('#my-form')
	form.classList.remove('hidden')
})

// hide form
const hideButton = document.querySelector('#cancel')
hideButton.addEventListener('click', (e) => {
	const form = document.querySelector('#my-form')
	form.classList.add('hidden')
})
