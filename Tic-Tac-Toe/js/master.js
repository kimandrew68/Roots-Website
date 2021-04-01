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
	var builder = playerName + "<br><img src='images/" + playerImage + ".png' />";

	if (playerName == "" && player == "player1") {
		document.getElementById("player1Name").value = "O";
	}

	if (playerName == "" && player == "player2") {
		document.getElementById("player2Name").value = "X";
	}

	document.getElementById(player + "Info").innerHTML = builder;
}

function simpleSqrt() {
	// Given x
	// Return INTEGER value of the sqrt, rounded DOWN
	// x = 4 -> 2
	// x = 5 -> 2
	// x = 50 -> 7

	// 0, 1, 4, 9, 16, 25, 36, 49, 64
	// xth perfect square = n
	// 1 = 0 + 1
	// 4 = 1 + 3
	// 9 = 4 + 5
	// # = (n - 1) + (2x + 1)
	// x = 0, n = 1
	// x = 1, n = 2
	// x = 2, n = 3
	// x = 9 -> 3

	var number = document.getElementById("sqrt").value;
	var perfectSq = 0;
	var sqrt = 0;

	while (perfectSq <= number) {
		perfectSq = sqrt + sqrt + 1;
		sqrt++;
	}

	alert(sqrt);

}

var turn = "O";
var counter = 0;
var gameover = false;

function changeImage(element) {
	var player1Image = document.getElementById("player1Image").value;
	var player2Image = document.getElementById("player2Image").value;

	if (gameover) {
		alert("Please reset the board.")
	}

	else {
		if (document.getElementById(element).innerHTML.length == 0) {
			counter++
			
			if (player1Image == "#" || player2Image == "#") {
				alert("Please select an avatar.")

			}

			else {
				if (turn == "O") {
					document.getElementById(element).innerHTML = "<img src='images/" + player1Image + ".png' />";
					turn = "X";
				}

				else {
					document.getElementById(element).innerHTML = "<img src='images/" + player2Image + ".png' />";
					turn = "O";
				}

				if(counter == 9) {
					alert("Game Over!");
					gameover = true;
				}
			}	
		}

		else {
			alert("This square is already taken!!")
		}
	}	
}

function tttDictionary(box) {
	switch (box) {
		case "b1":
		//evaluate 1, 4, 7; 1, 5, 9; 1, 2, 3
			tttWin("b1", "b4", "b7");
			tttWin("b1", "b5", "b9");
			tttWin("b1", "b2", "b3");
			break;
		case "b2":
			tttWin("b1", "b2", "b3");
			tttWin("b2", "b5", "b8");
			break;
		case "b3":
			tttWin("b1", "b2", "b3");
			tttWin("b3", "b5", "b7");
			tttWin("b3", "b6", "b9");
			break;
		case "b4":
			tttWin("b1", "b4", "b7");
			tttWin("b4", "b5", "b6");
			break;
		case "b5":
			tttWin("b1", "b5", "b9");
			tttWin("b2", "b5", "b8");
			tttWin("b3", "b5", "b7");
			tttWin("b4", "b5", "b6");
			break;
		case "b6":
			tttWin("b3", "b6", "b9");
			tttWin("b4", "b5", "b6");
			break;
		case "b7":
			tttWin("b1", "b4", "b7");
			tttWin("b3", "b5", "b7");
			tttWin("b7", "b8", "b9");
			break;
		case "b8":
			tttWin("b2", "b5", "b8");
			tttWin("b7", "b8", "b9");
			break;
		case "b9":
			tttWin("b1", "b5", "b9");
			tttWin("b3", "b6", "b9");
			tttWin("b7", "b8", "b9");
			break;
	}
}

function tttWin(var1, var2, var3) {
	var comp1 = document.getElementById(var1).innerHTML;
	var comp2 = document.getElementById(var2).innerHTML;
	var comp3 = document.getElementById(var3).innerHTML;
	var player1Image = document.getElementById("player1Image").value;
	var player2Image = document.getElementById("player2Image").value;
	
	if (turn == "X") {
	var position1 = comp1.indexOf(player1Image);
	var position2 = comp2.indexOf(player1Image);
	var position3 = comp3.indexOf(player1Image);

		if (position1 > -1 && position2 > -1 && position3 > -1) {
			alert(document.getElementById("player1Name").value + " wins!")
			gameover = true;
		}
	}

	else {
	var position1 = comp1.indexOf(player2Image);
	var position2 = comp2.indexOf(player2Image);
	var position3 = comp3.indexOf(player2Image);		

		if (position1 > -1 && position2 > -1 && position3 > -1) {
			alert(document.getElementById("player2Name").value + " wins!")
			gameover = true;
		}
	}
}

function reset() {
	for (var i = 1; i < 10; i++) {
		document.getElementById("b" + i).innerHTML = "";
	}	

	turn = "O";
	gameover = false;
	counter = 0;
}

// Add a default name for each player, in case they don't enter a name at all.
