let button = document.querySelector("#button");

const openNewTab = () => {
  window.open("components/result_page.html", "_blank");
};

button.addEventListener("click", openNewTab);
