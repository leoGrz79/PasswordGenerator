const btnRun = document.getElementById("btn-run");
const btnClear = document.getElementById("btn-clear");
const password = document.getElementById("text-password");
const passwordLabel = document.getElementById("passwordLabel");
const howManyChars = document.getElementById("howManyCharsRange");
const options = document.querySelectorAll(".option");

/*
Function to generate the random numbers. Make 3. Usar chars.substring??
1 - lowercase
2 - uppercase
3 - numbers + special chars

*/

function passwordGenerator(chars) {
	let password = '';
	let randomNumber = 0;
  for (i = 0; i < chars ; i += 1) {
    randomNumber = Math.floor(Math.random() * (127 - 33) + 33);
		password += String.fromCharCode(randomNumber);
  }
	return password;
}

function copyToClipboard() {
	console.log(password.innerHTML);
	navigator.clipboard.writeText(password.innerHTML);
}

options.forEach(opt => {
	opt.addEventListener("click", () => {
		if (!opt.classList.contains('makeGolden')) {
			opt.classList.add('makeGolden');
			opt.classList.remove('makeWhite');
		} else {
			if (!opt.classList.contains('makeWhite')) {
				opt.classList.add('makeWhite');
				opt.classList.remove('makeGolden');
		}
	}
	});
});

password.addEventListener("click", () => {
	copyToClipboard();
	password.setAttribute('title','copied!');
})

btnRun.addEventListener("click", () => {	
	password.innerHTML = passwordGenerator(howManyChars.value);
	passwordLabel.innerHTML = 'your password is:';
	password.setAttribute('title','copy to clipboard');
});

btnClear.addEventListener("click", () => {
	howManyChars.value = '0';
	password.innerHTML = '';
	passwordLabel.innerHTML = 'click RUN to generate a password';
	password.setAttribute('title','copy to clipboard');
});
