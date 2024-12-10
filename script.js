const textArea = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
result.style.display = "none"

function text_check() {
  if (textArea.value == "") {
    checkBtn.innerHTML = "empty";
    alert("Please input a value");
    result.style.display = "none";
  } else {
    let conversion = textArea.value.toLowerCase();
    conversion = conversion.replace(/[^a-zA-Z0-9]/g, "");

    // Check if Palindrome
    result.style.display = "block";
    result.innerHTML = textArea.value;
    if (check_palindrome(conversion)) { result.innerHTML += " is a palindrome" }
    else { result.innerHTML += " is not a palindrome" }

    // Reset boxes    
    //checkBtn.innerHTML = conversion;
    textArea.value = "";
  }
}

const check_palindrome = (text) => {
  let textLen = text.length - 1;
  
  for (let i=0; i<textLen/2; i++) {
    let x = text[i]; //forward character
    let y = text[textLen-i]; //backwards character
    if (x != y) {
      return false;
    }
  }

  return true;
}