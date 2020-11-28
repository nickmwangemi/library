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
	myLibrary.map((element) => {
		const card = document.createElement('div')
		card.setAttribute('class', 'card')
		// title
		const h1 = document.createElement('h1')
		h1.textContent = element.title

		// author
		const author = document.createElement('p')
		author.textContent = `Author: ${element.author}`

		const pages = document.createElement('p')
		pages.textContent = `Pages: ${element.pages}`

		const readStatus = document.createElement('p')
		readStatus.textContent = element.read

		readStatus.textContent = readStatus
			? 'Read Status: Read'
			: 'Read Status: Not read yet'

		const deleteDiv = document.createElement('div')
		deleteDiv.setAttribute('id', 'delete-book')

		const deleteBtn = document.createElement('button')
		deleteDiv.appendChild(deleteBtn)

		deleteBtn.setAttribute('class', 'btn-danger delete')
		deleteBtn.textContent = 'DELETE'

		card.appendChild(h1)
		card.appendChild(author)
		card.appendChild(pages)
		card.appendChild(readStatus)
		card.appendChild(deleteBtn)

		container.appendChild(card)
	})
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

// Local storage class
class Store {
	static getBooks() {
		if (localStorage.getItem('BOOKS') === null) {
			myLibrary
		} else {
			myLibrary = JSON.parse(localStorage.getItem('BOOKS'))
		}
		return myLibrary
	}

	static addBook(book) {
		myLibrary.push(book)
		localStorage.setItem('BOOKS', JSON.stringify(myLibrary))
		Store.displayBooks()
	}

	static removeBook() {}
}

// display
showBooks()

// collect data
const form = document.querySelector('#my-form')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const msg = document.querySelector('.msg')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	if (author.value === '' || title.value === '' || pages.value === '') {
		msg.classList.add('error')
		msg.innerHTML = 'Please enter all fields'

		setTimeout(() => msg.remove(), 3000)
	} else {
		book = new Book(title.value, author.value, pages.value)

		// save to local storage
		Store.addBook(book)

		// reset fields
		author.value = ''
		title.value = ''
		pages.value = ''
	}
})
