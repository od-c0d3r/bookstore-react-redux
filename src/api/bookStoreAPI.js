const API_BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

function postNewAppOptions() {
  return {
    method: 'POST',
  };
}

async function postNewApp() {
  const response = await fetch(`${API_BASE}/apps/`, postNewAppOptions());
  return response.text();
}

postNewApp(API_BASE).then((data) => data);
