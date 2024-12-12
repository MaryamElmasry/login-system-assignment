

let username = document.getElementById("username");

let user = JSON.parse(localStorage.getItem("loggedInUser"));

console.log(user)

username.innerHTML += `${user.name}`;





