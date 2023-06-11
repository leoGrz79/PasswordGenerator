const btnRun = document.getElementById("btn-run");
const btnClear = document.getElementById("btn-clear");
const password = document.getElementById("text-password");
const h2 = document.querySelector("H2");

btnRun.addEventListener("click", function () {
	password.value = passwordGenerator(10);
});

btnClear.addEventListener("click", function () {
	password.value = '';
});



function passwordGenerator(chars) {  
	let password = '';
	let randomNumber = 0;
  for (i = 0; i < chars ; i += 1) {
    randomNumber = Math.floor(Math.random() * (127 - 33) + 33);
		password += String.fromCharCode(randomNumber);
  }
	return password;
}

console.log(passwordGenerator(10));