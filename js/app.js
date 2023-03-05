// ! side bar section
let sidebar = document.querySelector("aside");
let sidebarBtn = document.querySelector(".bar");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  if (sidebarBtn.classList.contains("fa-bars")) {
    sidebarBtn.classList.replace("fa-bars", "fa-xmark");
  } else {
    sidebarBtn.classList.replace("fa-xmark", "fa-bars");
  }
});
// ! add active class one ach link while scrolling
let sections = Array.from(document.querySelectorAll("section"));
let links = Array.from(document.querySelectorAll("aside ul a"));

// ! works but page too small for it xd
// when scroll triger scrollFun()
window.onscroll = scrollFun;

function scrollFun() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offsetTop = sec.offsetTop - 150;
    let secHeight = sec.offsetHeight;
    let id = sec.id;

    // - 150 to add the active class before get the page by 150px
    // the condition
    if (top >= offsetTop && top < offsetTop + secHeight) {
      links.map((link) => {
        // remove active from all
        link.classList.remove("active");
        // catch the link to add active class on it
        if (link.dataset.sec == id) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ! details section
let detailsBtns = Array.from(
  document.querySelectorAll(".details .speaker button")
);
let detailsInfo = Array.from(
  document.querySelectorAll(".details .speaker .info")
);

detailsBtns.map((btn) => {
  btn.addEventListener("click", (e) => {
    detailsInfo.map((info) => {
      info.classList.remove("active");
    });
    e.target.nextElementSibling.classList.add("active");
  });
});

// ! date countdown
let dayEl = document.querySelector(".date .wrapper .day");
let hrEl = document.querySelector(".date .wrapper .hr");
let minEl = document.querySelector(".date .wrapper .min");
let secEl = document.querySelector(".date .wrapper .sec");
let partyTime = new Date("April 1, 2023").getTime();

let countdown = setInterval(() => {
  let timeNow = new Date().getTime();

  let timeDiff = partyTime - timeNow;
  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

  dayEl.innerHTML = `${days} <span>day</span>`;
  hrEl.innerHTML = `${hours} <span>hr</span>`;
  minEl.innerHTML = `${minutes} <span>min</span>`;
  secEl.innerHTML = `${secs} <span>sec</span>`;

  if (timeDiff < 0) {
    clearInterval(countdown);
  }
}, 1000);

// ! text area

let textArea = document.querySelector(".contact .right textarea");
let textCounter = document.querySelector(".contact .right p span");
let maxChars = textArea.getAttribute("maxlength");
textCounter.innerHTML = maxChars;

textArea.oninput = function () {
  if (textArea.value.length >= maxChars) {
    textCounter.style.color = "red";
  } else {
    textCounter.style.color = "green";
  }
  textCounter.innerHTML = maxChars - textArea.value.length;
};
