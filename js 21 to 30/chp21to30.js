var name;
name = "Alishba Irfan";

alert(name);

var a = 5;
var b = "10";
var c = 6 + 7 * 4 / 2;
var d = 10 % 3;
alert(c);
alert(d);
document.write(100);

var a = 1 + 1 - 3;
a = a + 5;
a = 5 + a;
alert(a);

var b = 1;
alert(b++);

var c = 1;
alert(++c);

var d = 1;
alert(d--);

var e = 1;
alert(e--);

var b = 1;
alert(b++);

var e = 5;
e = 6;
alert(e);

var f = 5;
f = f++ + 5;

var f = 5;
f = ++f + 5;

f = 5;
f = 6;
f = 10;

var g = "My name is:    ";
document.write(g + "Alishba");

var a = prompt("Enter string", "Your string");
var b = prompt("Enter string", "Your string");
var c = a + b;
alert(c);


var x = prompt("Enter Number", "Your number");
var y = prompt("Enter Number", "Your Number");
var z = parseInt(x) + parseInt(y);
alert(z);


var a = prompt("Enter your Name");
if (a === "Alishba") {
    document.write("True");
}
else {
    document.write("False");
}

var x = prompt("Enter your Percentage", "Your Percentage");
if (x <= 100 && x >= 90) {
    alert("A+");
}
else if (x < 90 && x >= 80) {
    alert("A");
}
else if (x < 80 && x >= 70) {
    alert("B");
}
else if (x < 70 && x >= 60) {
    alert("C");
}
else if (x < 60 && x >= 50) {
    alert("D");
}
else if (x < 50 && x >= 40) {
    alert("E");
}
else {
    alert("F");
}
var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}


var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
var matchFound = false;
for (var i = 0; i < 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}


var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (!found) {
            if (found != arr[i]) {
                document.write("TRUE");
                break;
            }
        } else {
            document.write("SET foun")
            found = arr[i];
        }
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var needToFound = [1, 2, 200, 300, 5]
var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 200, 300]

for (var i = 0; i < needToFound.length; i++) {
    var index = arr.indexOf(needToFound[i]);
    if (index != -1) {
        needToFound.splice(i, 1);
        i--;
    }
}
if (!needToFound.length) {
    document.write("Found All")
} else {
    document.write("Not Found these numbers : " + needToFound.join(",,"));
}