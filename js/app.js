const btnRun = document.getElementById("btn-run");
const btnClear = document.getElementById("btn-clear");
const password = document.getElementById("text-password");
const passwordLabel = document.getElementById("passwordLabel");
const options = document.querySelectorAll(".option");

function passwordGenerator(chars) {  
	let password = '';
	let randomNumber = 0;
  for (i = 0; i < chars ; i += 1) {
    randomNumber = Math.floor(Math.random() * (127 - 33) + 33);
		password += String.fromCharCode(randomNumber);
  }
	return password;
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

btnRun.addEventListener("click", () => {
	password.innerHTML = passwordGenerator(10);
	passwordLabel.innerHTML = 'your password is:';
});

btnClear.addEventListener("click", () => {
	password.innerHTML = '';
	passwordLabel.innerHTML = 'click RUN to generate a password';
});
