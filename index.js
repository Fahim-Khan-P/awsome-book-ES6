import Books from './moduels/bookclass.js';
import {
  titles, authors, add, addLi, listLi, contactLi, luxonTime,
} from './moduels/variables.js';
import { ahowAddBookHandler, showContactHandler, showListHandler } from './moduels/navigation.js';
import { DateTime } from './moduels/luxon.js';

const book = new Books(titles.value, authors.value);

book.showBooks();

add.addEventListener('click', () => {
  book.book.title = titles.value;
  book.book.author = authors.value;
  book.book.id = book.allBooks.length + 1;
  if (book.book.title && book.book.author) {
    book.add();
  }
});

const updateTime = () => {
  const now = DateTime.now();
  luxonTime.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(updateTime, 1000);

// adds listener to navigation
addLi.addEventListener('click', ahowAddBookHandler);
listLi.addEventListener('click', showListHandler);
contactLi.addEventListener('click', showContactHandler);
