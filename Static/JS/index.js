$(document).ready(function () {
  imageAdjuster();
  loadParticles();
  //$("#my-form").submit(handleSubmit());
});

function imageAdjuster() {
  var myImg = document.getElementById("myImg");
  var personalInfo = document.getElementById("personalInfo");
  var lastScrollTop = 0;

  $(document).scroll(function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      personalInfo.style.maxHeight = "92%";
      myImg.style.margin = 0;
    } else {
      personalInfo.style.maxHeight = "70%";
      myImg.style.marginTop = "-8rem";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
}
function loadParticles() {
  particlesJS.load(
    "particles-js",
    "./static/Plugins/Particles.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}

async function handleSubmit(event) {
  event.preventDefault();
  var form = document.getElementById("my-form");
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
