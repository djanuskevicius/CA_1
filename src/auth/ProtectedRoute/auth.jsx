export function isLoggedIn() {
  return !!localStorage.getItem('userId');
}
