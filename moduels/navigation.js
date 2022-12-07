import { bookList, form, contactInfo } from './variables.js';

export const ahowAddBookHandler = () => {
  bookList.classList.add('non-visible');
  form.classList.remove('non-visible');
  contactInfo.classList.add('non-visible');
};

export const showListHandler = () => {
  if (bookList.classList.contains('non-visible')) {
    bookList.classList.remove('non-visible');
    form.classList.add('non-visible');
    contactInfo.classList.add('non-visible');
  }
};

export const showContactHandler = () => {
  bookList.classList.add('non-visible');
  form.classList.add('non-visible');
  contactInfo.classList.remove('non-visible');
};