function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
  
    for (let i = 1; i <= 100; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.textContent = i;
      numberDiv.classList.add("number");
      
      if (i % 2 === 0) {
        numberDiv.classList.add("even");
      } else {
        numberDiv.classList.add("odd");
      }
  
      if (isPrime(i)) {
        numberDiv.classList.add("prime");
      }
  
      container.appendChild(numberDiv);
    }
  });
  