var numOne = 10;

var numTwo = 11;

var add = numOne + numTwo;
var subtract = numOne - numTwo;
var multiply = numOne * numTwo;
var divide = numOne / numTwo; 

document.getElementById("plus").innerHTML = "When I add" + numOne + "to" + numTwo + "I get" + add + ".";
document.getElementById("minus").innerHTML = "When I subtract" + numOne + "from" + numTwo + "I get" + subtract + ".";
document.getElementById("times").innerHTML = "When I multiply" + numOne + "by" + numTwo + "I get" + multiply + ".";
document.getElementById("per").innerHTML = "When I divide" + numOne + "from" + numTwo + "I get" + divide + ".";