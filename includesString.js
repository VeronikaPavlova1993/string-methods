function includesString(string1, string2) {
 const upString1 = string1.toUpperCase();
 const upString2 = string2.toUpperCase();
 if (upString1.includes(upString2) || upString2.includes(upString1)) {
  return true;
 }
 return false;
}
