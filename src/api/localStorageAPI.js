export function setLocalID(id) {
  localStorage.setItem('appId', id);
  return true;
}

export function getLocalID() {
  return localStorage.getItem('appId');
}

export function setLocalBooks(books) {
  localStorage.setItem('books', JSON.stringify(books));
  return true;
}

export function getLocalBooks() {
  return JSON.parse(localStorage.getItem('books'));
}
