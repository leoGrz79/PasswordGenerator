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