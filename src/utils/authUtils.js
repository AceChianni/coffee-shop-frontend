// /src/utils/authUtils.js

export function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
  
  export function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  export function validateUser(email, password) {
    const users = getUsers();
    return users.find((user) => user.email === email && user.password === password);
  }
  