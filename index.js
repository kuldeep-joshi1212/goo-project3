let items = document.querySelectorAll("li");
console.log(items);
items.forEach((item) => {
  let input = item.querySelector(".input");
  console.log(input);
  if (input) {
    input.addEventListener("focus", () => {
      let span = item.querySelector("span");
      if (span) {
        span.style.display = "none";
      }
    });
    input.addEventListener("blur", () => {
        let span = item.querySelector("span");
        if (span) {
          span.style.display = "block";
        }
      });
  }
});
