function upFirstLetter(string) {
 if (!string) return string;
 let newStr = string.trim();
 return newStr[0].toUpperCase() + newStr.slice(1);
}
