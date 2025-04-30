document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Dummy credentials
    const correctUsername = "admin";
    const correctPassword = "password123";
  
    if (username === correctUsername && password === correctPassword) {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerText = "Login successful!";
      // Redirect or further actions can go here
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerText = "Invalid username or password.";
    }
  });
  