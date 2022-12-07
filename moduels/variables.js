const titles = document.getElementById('title');
const authors = document.getElementById('author');
const add = document.getElementById('add');
const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
const savedBooksSection = document.getElementById('saved-books');
const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');
const listLi = document.getElementById('list-li');
const addLi = document.getElementById('add-li');
const contactLi = document.getElementById('contact-li');
const luxonTime = document.getElementById('luxonTime');

export {
  titles, authors, add,
  booksFromLocalStorage,
  savedBooksSection,
  form, bookList, contactInfo,
  listLi, addLi, contactLi, luxonTime,
};
// export const test = "khan";
