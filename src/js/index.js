const listItems = document.querySelectorAll(".header__nav-list-link");

listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    removeItem();
    event.target.classList.add("active");
  });
});

function removeItem() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}
