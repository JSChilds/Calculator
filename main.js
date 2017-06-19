function run() {
		function add(n1, n2) {
			return parseFloat(n1) + parseFloat(n2);
		}
		function subtract(n1, n2) {
			return parseFloat(n1) - parseFloat(n2);
		}
		function multiply(n1, n2) {
			return parseFloat(n1) * parseFloat(n2);
		}
		function divide(n1, n2) {
			return parseFloat(n1) / parseFloat(n2);
		}
		function power(n1, n2) {
			return parseFloat(n1)**parseFloat(n2);
		}
		function squareRoot(n1) {
			return Math.sqrt(parseFloat(n1));
		}
		function compare2(n1, n2) {
			if (parseFloat(n1) > parseFloat(n2)) {
				return n1 + ' is greater.';
			}
			else if (parseFloat(n2) > parseFloat(n1)) {
				return n2 + ' is greater.';
			}
			return 'The values are equal';
		}
		function compare3(n1, n2, n3) {
			if (parseFloat(n1) > parseFloat(n2) && parseFloat(n1) > parseFloat(n3)) {
				return n1 + ' is the greatest.';
			}
			else if (parseFloat(n2) > parseFloat(n1) && parseFloat(n2) > parseFloat(n3)) {
				return n2 + ' is the greatest.';
			}
			else if (parseFloat(n3) > parseFloat(n1) && parseFloat(n3) > parseFloat(n2)) {
				return n3 + ' is the greatest.';
			}
			return 'No one number is the greatest.';
		}
		function choice() {
			var select = 'Please enter ADD, SUBTRACT, MULTIPLY, DIVIDE, POWER, SQUARE ROOT, COMPARE2 or COMPARE3, or enter QUIT to exit the calculator.';
			var option = prompt(select);
			var error = ('That is not a number. Please enter a number.');
			while (option.toUpperCase() !== 'QUIT' ) {
				if (option.toUpperCase() == 'ADD') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = add(number1, number2);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'SUBTRACT') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = subtract(number1, number2);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'MULTIPLY') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = multiply(number1, number2);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'DIVIDE') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = divide(number1, number2);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'POWER') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = power(number1, number2);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'SQUARE ROOT' || option.toUpperCase() == 'SQUAREROOT') {
					var number1 = prompt('Please enter your number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var result = squareRoot(number1);
					alert('The result is: ' + result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'COMPARE 2' || option.toUpperCase() == 'COMPARE2') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var result = compare2(number1, number2);
					alert(result);
					var option = prompt(select);
				}
				else if (option.toUpperCase() == 'COMPARE 3' || option.toUpperCase() == 'COMPARE3') {
					var number1 = prompt('Please enter your first number.');
					while (isNaN(number1) || number1 == '') {
						var number1  = prompt(error);
					}
					var number2 = prompt('Please enter your second number');
					while (isNaN(number2) || number2 == '') {
						var number2 = prompt(error);
					}
					var number3 = prompt('Please enter your third number');
					while (isNaN(number3) || number3 == '') {
						var number3 = prompt(error);
					}
					var result = compare3(number1, number2, number3);
					alert(result);
					var option = prompt(select);
				}
				else {
					var option = prompt('Sorry, that is not a recognised command. Please enter ADD, SUBTRACT, MULTIPLY, DIVIDE, POWER, SQUARE ROOT, COMPARE2 or COMPARE3, or enter QUIT to exit the calculator.');
				}
			}
		}
		choice();
	}