const btnRun = document.getElementById("btn-run");
const btnClear = document.getElementById("btn-clear");
const password = document.getElementById("text-password");
const h2 = document.querySelector("H2");
const spans = document.querySelectorAll("span");

function passwordGenerator(chars) {  
	let password = '';
	let randomNumber = 0;
  for (i = 0; i < chars ; i += 1) {
    randomNumber = Math.floor(Math.random() * (127 - 33) + 33);
		password += String.fromCharCode(randomNumber);
  }
	return password;
}

spans.forEach(span => {
	span.addEventListener("click", () => {
		if (!span.classList.contains('makeGolden')) {
			span.classList.add('makeGolden');
			span.classList.remove('makeWhite');
		} else {
			if (!span.classList.contains('makeWhite')) {
				span.classList.add('makeWhite');
				span.classList.remove('makeGolden');
		}
	}
	});
});

btnRun.addEventListener("click", () => {
	password.value = passwordGenerator(10);
	h2.innerHTML = 'your password is:';
});

btnClear.addEventListener("click", () => {
	password.value = '';
	h2.innerHTML = 'click RUN to generate a password';
});
