function toggleDropdown(element) {
  const answer = element.nextElementSibling;
  const plusSign = element.querySelector('.plus');

  if (answer.style.display === "block") {
    answer.style.display = "none";
    plusSign.textContent = "+";
  } else {
    answer.style.display = "block";
    plusSign.textContent = "-";
  }
}
