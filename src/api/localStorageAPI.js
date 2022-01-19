export function setLocalID(id) {
  localStorage.setItem('appId', id);
  return true;
}

export function getLocalID() {
  return localStorage.getItem('appId');
}
