const accordionTriggerEl = document.querySelectorAll(".accordion-trigger");
const accordionItemEl = document.querySelectorAll(".accordion-item");

accordionTriggerEl.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // First we will remove class name "open" to all ".accordion-item" elements
    accordionItemEl.forEach(function (item) {
      item.classList.remove("open");
    });
    // then we will add class name "open" to only targeted element
    e.target.parentElement.classList.add("open");
  });
});
