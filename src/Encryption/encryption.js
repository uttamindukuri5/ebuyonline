
// Encryption for passwords entered by users.
function rot13cipher(str, k) {
    var aCode = 'a'.charCodeAt(0);  // Starting Point (lowercase).
    var ACode = 'A'.charCodeAt(0);  // Starting Point (uppercase).
    var zCode = 'z'.charCodeAt(0);  // Ending Point (lowercase).
    var ZCode = 'Z'.charCodeAt(0);  // Ending Point (uppercase).
    var nCode = 'n'.charCodeAt(0);  // Mid Point (lowercase).
    var NCode = 'N'.charCodeAt(0);  // Mid Point (uppercase).
    var retString = "";
    for (var i = 0; i < str.length; i++) {
        var chr = str.charCodeAt(i);
        if (chr >= ACode && chr <= ZCode) {
            if (chr >= NCode)
                retString = retString.concat(String.fromCharCode(chr - 13));
            else
                retString = retString.concat(String.fromCharCode(chr + 13));
        }
        else if (chr >= aCode && chr <= zCode) {
            if (chr >= nCode)
                retString = retString.concat(String.fromCharCode(chr - 13));
            else
            retString = retString.concat(String.fromCharCode(chr + 13));
        }
        else
            retString = retString.concat(str[i]);
    }
    return secondLevel(retString, k);
}

function secondLevel(str, k) {
    var hex = "";
    var flag = false;
    for (var i = 0; i < str.length; i++) {
        if (!flag)
            hex += (str.charCodeAt(i) + k*73).toString(16);
        else {
            hex += (str.charCodeAt(i) - k*73).toString(16);
            k += 97;
        }
        flag = !flag;
    }
    return hex;
}

// This is a test call, please change it near the function call. DO NOT INCLUDE IT IN SOURCE CODE. TEST CASE ONLY.
console.log("Test case")
var hexValue = rot13cipher('AaBb-?', 3);
console.log("Test Value: " + hexValue);
console.log("Expected hexString: 129-6d1cd3-1c15385a-37ee")
