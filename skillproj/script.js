function registerUser() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful!");
      window.location.href = "front.html";
    })
    .catch(err => alert("Error: " + err.message));
}

function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "front.html";
    })
    .catch(err => alert("Error: " + err.message));
}
