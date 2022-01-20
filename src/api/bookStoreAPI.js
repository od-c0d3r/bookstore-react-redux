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

function postBookOptions(apiBookObj) {
  return {
    method: 'POST',
    body: JSON.stringify(apiBookObj),
    headers: {
      'Content-type': 'application/json',
    },
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

export async function addBook(apiBookObj) {
  const response = await fetch(`${API_BASE}/apps/${getLocalID()}/books`, postBookOptions(apiBookObj));
  return response.text();
}
