function switchPrice() {
  var monthly = document.querySelectorAll(".monthly");
  var yearly = document.querySelectorAll(".yearly");
  var toggle = document.querySelector(
    '.switch input[type = "checkbox"]'
  );

  monthly.forEach((element) => {
    if (toggle.checked) {
      element.style.display = "inline";
    } else {
      element.style.display = "none";
    }
  });

  yearly.forEach((element) => {
    if (toggle.checked) {
      element.style.display = "none";
    } else {
      element.style.display = "inline";
    }
  });
}

document
  .querySelector('.switch input[type="checkbox"]')
  .addEventListener("change", switchPrice);

switchPrice();
