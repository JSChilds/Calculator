var option = prompt('Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');

while (option.toUpperCase() !== 'QUIT' ) {
	if (option.toUpperCase() == 'ADD') {
		var number1 = prompt('Please enter your first number');
		var number2 = prompt('Please enter your second number');
		var result = parseFloat(number1) + parseFloat(number2);
		alert('The result is: ' + result);
		var option = prompt('Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');
	}
	else if (option.toUpperCase() == 'SUBTRACT') {
		var number1 = prompt('Please enter your first number');
		var number2 = prompt('Please enter your second number');
		var result = parseFloat(number1) - parseFloat(number2);
		alert('The result is: ' + result);
		var option = prompt('Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');
	}
	else if (option.toUpperCase() == 'MULTIPLY') {
		var number1 = prompt('Please enter your first number');
		var number2 = prompt('Please enter your second number');
		var result = parseFloat(number1) * parseFloat(number2);
		alert('The result is: ' + result);
		var option = prompt('Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');
	}
	else if (option.toUpperCase() == 'DIVIDE') {
		var number1 = prompt('Please enter your first number');
		var number2 = prompt('Please enter your second number');
		var result = parseFloat(number1) / parseFloat(number2);
		alert('The result is: ' + result);
		var option = prompt('Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');
	}
	else {
		var option = prompt('Sorry, that command is not recognised. Please enter ADD, SUBTRACT, MULTIPLY or DIVIDE, or enter QUIT to exit the calculator.');
	}
};