let convertBtn = document.querySelector(".btn");
let result = document.querySelector(".result");
convertBtn.addEventListener("click", addDecimal);

// Getting Decimal number
function getDecimal(binary) {
  binary = document.querySelector("#binary").value;
  binary = binary.toString().split("");
  let check = binary.every((num) => num == "0" || num == "1");
  if (check) {
    let length = binary.length;
    let ans = 0;
    let i = 0;
    while (i < length) {
      if (binary[i] == 1) {
        let num = length - 1 - i;
        ans += 2 ** num;
      }
      i++;
    }
    return `Decimal Number : ${ans}`;
  } else {
    return `Number is not Binary!! Enter Valid Number`;
  }
}

// Adding decimal number
function addDecimal(event) {
  result.textContent = getDecimal(binary);
  return event.preventDefault();
}

// ====== Decimal to binary ========
// let length = Math.floor(Math.log2(decimal));
// let ans = 0;
// while (length > 0) {
//   let num = 2 ** length;
//   if (num <= decimal) {
//     ans += 10 ** length;
//     decimal -= num;
//   }
//   length--;
// }
// console.log(ans);
