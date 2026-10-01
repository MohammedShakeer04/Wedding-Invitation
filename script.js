const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const openButton = document.getElementById("openButton");
const backButton = document.getElementById("backButton");

let busy = false;

function showPage2() {
  if (busy || page2.style.display === "flex") return;
  busy = true;

  page1.classList.add("is-leaving");

  setTimeout(() => {
    page1.style.display = "none";
    page1.classList.remove("is-leaving");

    page2.style.display = "flex";
    page2.classList.add("is-entering");
    backButton.style.display = "block";

    window.scrollTo({ top: 0, behavior: "auto" });

    setTimeout(() => {
      page2.classList.remove("is-entering");
      busy = false;
    }, 720);
  }, 500);
}

function showPage1() {
  if (busy || page1.style.display !== "none") return;
  busy = true;

  page2.classList.add("is-leaving");

  setTimeout(() => {
    page2.style.display = "none";
    page2.classList.remove("is-leaving");

    page1.style.display = "flex";
    page1.classList.add("is-entering");
    backButton.style.display = "none";

    window.scrollTo({ top: 0, behavior: "auto" });

    setTimeout(() => {
      page1.classList.remove("is-entering");
      busy = false;
    }, 720);
  }, 500);
}

openButton.addEventListener("click", showPage2);
backButton.addEventListener("click", showPage1);

// Optional keyboard support.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") showPage1();
});
