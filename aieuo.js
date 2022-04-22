function isEquivalent(a, b) {
    if ((a === b) || ((a === "e" && b === "i") || (a === "i" && b === "e")) || ((a === "o" && b === "u") || (a === "u" && b === "o"))) {
        return true;
    } else {
        return false;
    }
    
    /*
    if ((a === "e" && b === "i") || (a === "i" && b === "e")) {
        return true;
    } else {
        return false;
    }
    
    if ((a === "o" && b === "u") || (a === "u" && b === "o")) {
        return true;
    } else {
        return false;
    }
    */
}
var r = readline().split(" ");
var firstArr = [];
var secondArr = [];
 
 
for (var i = 0; i < r[0].length; i++) {
    firstArr[i] = r[0].split("")[i];
}
 
for (var i = 0; i < r[1].length; i++) {
    secondArr[i] = r[1].split("")[i];
}
 
var greaterArr = firstArr;
 
if (firstArr.length < secondArr.length) {
    greaterArr = secondArr;
}
 
var ansArr = [];
for (var i = 0; i < greaterArr.length; i++) {
    if (isEquivalent(firstArr[i], secondArr[i])) {
        ansArr.push(true);
    } else {
        ansArr.push(false);
    }
    
    if (firstArr.length !== secondArr.length) {
        ansArr.push(false);
    }
}
var allTrue = ansArr.every(x => x);
 
if (allTrue) {
    print("yis");
} else {
    print("nuu");
}