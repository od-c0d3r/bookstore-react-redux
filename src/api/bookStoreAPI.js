import { getLocalID } from './localStorageAPI';

const API_BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

function postNewAppOptions() {
  return {
    method: 'POST',
  };
}

function getBooksOptions() {
  return {
    method: 'GET',
  };
}

export async function newAppId() {
  const response = await fetch(`${API_BASE}/apps/`, postNewAppOptions());
  return response.text();
}

export async function getBooks() {
  const response = await fetch(`${API_BASE}/apps/${getLocalID()}/books`, getBooksOptions());
  return response.text();
}

getBooks().then(((data) => console.log(data)));
