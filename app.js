// Javascript program to generate short url from integer id and
// integer id back from short url.

// Function to generate a short url from integer ID
// Map to store 62 possible characters
/* const alpha = "abcdefghijklmnopqrstuvwxyz"
    + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    + "0123456789";
*/
const alpha = "0123456789" + "ABCDEF";
const base = alpha.length;

function idToShortURL(n) {
  let shorturl = [];

  // Convert given integer id to a base 62 number
  // TODO: Assert n >= 0
  do {
    // use above map to store actual character
    // in short url
    shorturl.push(alpha[n % base]);
    n = Math.floor(n / base);
  } while (n);

  // Reverse shortURL to complete base conversion
  shorturl.reverse();

  return shorturl.join("");
}

// Function to get integer ID back from a short url
function shortURLtoID(shortURL) {
  let id = 0; // initialize result

  // TODO: Test for invalid characters in shortURL

  // A simple base conversion logic
  for (let i = 0; i < shortURL.length; i++) {
    id = id * base + alpha.indexOf(shortURL[i]);
  }
  return id;
}

// Driver program to test above function

// document.write("Generated short url is " + shorturl + "<br>");
// document.write("Id from url is " + shortURLtoID(shorturl));

for (let i = 0; i < 64; i++) {
  let shorturl = idToShortURL(i);
  console.log(shortURLtoID(shorturl), shorturl);
}
