const extendHex = (shortHex) => {
  // write your code here
 
  let hexCode = ["#"],
    isCapital = false;
 
  shortHex = shortHex.replace("#", "");
 
  for (let i = 0; i < shortHex.length; i++) {
    if (
      shortHex.charAt(i) === shortHex.charAt(i).toUpperCase() &&
      shortHex.charAt(i) !== shortHex.charAt(i).toLowerCase()
    ) {
      isCapital = true;
      break;
    }
  }
 
  for (let i = 0; i < shortHex.length; i++) {
    if (isCapital) {
      hexCode.push(shortHex.charAt(i).toUpperCase());
      hexCode.push(shortHex.charAt(i).toUpperCase());
    } else {
      hexCode.push(shortHex.charAt(i));
      hexCode.push(shortHex.charAt(i));
    }
  }
 
  return hexCode.join("");
};
 
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));