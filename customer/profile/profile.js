const userData=JSON.parse(window.localStorage.getItem("data"));
console.log(userData);
document.getElementById("username").innerText=userData.userName;