function isPalindrome() {
	var word = "racecar";
	var length = word.length;
	var builder = "";
	var palindrome = true;
	/*
	for(var i = length - 1; i >= 0; i--) {
		builder += word[i];
	}
	
	alert(builder)
	*/


	for (var i = 0; i < Math.floor(length / 2); i++) {
		if (word[i] != word[length - i - 1]) {
			palindrome = false;
			break;
		}

		else {
			continue;
		}
	}
		
		if (palindrome) {
			alert(word + " is a palindrome!")
		}

		else {
			alert(word + " is NOT a palindrome!")
		}
}

function romanDictionary(letter) {
	switch(letter) {
		case "I":
			return 1;
			break;
		case "V":
			return 5;
			break;
		case "X":
			return 10;
			break;
		case "L":
			return 50;
			break;
		case "C":
			return 100;
			break;
		case "D":
			return 500;
			break;
		case "M":
			return 1000;
			break;
		default:
			alert("That is not a valid roman numeral.")
			break;
	}
}

function convertRoman() {
	var roman = "MCDXCIV";
	var length = roman.length;
	var total = 0;
	var holder;

	for(var i = 0; i < length; i++) {
		if(i < length - 1 && romanDictionary(roman[i]) < romanDictionary(roman[i + 1])) {
			total += romanDictionary(roman[i + 1])
			total -= romanDictionary(roman[i]);
			i++;
		}

		else {
			total += romanDictionary(roman[i]);
			continue;
		}
		
	}

	alert("The roman numeral " + roman + " is equal to " + total);
}

function enterPlayer(player) {
	var playerName = document.getElementById(player + "Name").value;
	var playerImage = document.getElementById(player + "Image").value;
	var builder = playerName + "<br><img src='images/" + playerImage + ".png' />"

	document.getElementById(player + "Info").innerHTML = builder;
}