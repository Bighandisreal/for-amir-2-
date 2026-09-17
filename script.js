let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(number) {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === number);
  });

  currentPage = number;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}

function previousPage() {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

function goHome() {
  showPage(0);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    nextPage();
  }

  if (event.key === "ArrowLeft") {
    previousPage();
  }
});

showPage(0);
