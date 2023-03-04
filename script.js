let value = 0;
let not = document.querySelectorAll(".not");
let yes = document.querySelectorAll(".yes");
let vSpan = document.querySelector('span.value');
// console.log(vSpan);
function handleClick(element) {
  // element.classList.add('hidden');
  if (value !== 0) {
    for (let i = 0; i < not.length; i++) {
      not[i].classList.add("hidden");
    }
	vSpan.innerText = value;
    for (let i = 0; i < yes.length; i++) {
      yes[i].classList.remove("hidden");
    }
  }
}

const spanElements = document.querySelectorAll(".rating-com");

for (let i = 0; i < spanElements.length; i++) {
  spanElements[i].addEventListener("click", function () {
    const activeSpan = document.querySelector(".rating-com.active");
    if (activeSpan) {
      activeSpan.classList.remove("active");
    }
    this.classList.add("active");
    value = this.innerText;
    // console.log(value);
  });
}
