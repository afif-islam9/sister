function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');
  
    const correctUsername = "ikra";
    const correctPassword = "123";
  
    if (username === correctUsername && password === correctPassword) {
      window.location.href = "index2.html";
    } else {
      error.textContent = "Oops! Wrong username or password 💔";
    }
  }
  