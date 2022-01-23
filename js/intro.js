var dots =
  document.getElementsByClassName(
    "dots-item"
  );
var dotsarea =
  document.getElementsByClassName(
    "dots-block"
  )[0];
var slides =
  document.getElementsByClassName(
    "slides-item"
  );
var prevBtn = document.getElementById(
  "left-button"
);
var nextBtn = document.getElementById(
  "right-button"
);
var slidesIndex = 1;
showSlides(slidesIndex);

function showSlides(n) {
  if (n < 1) {
    slidesIndex = slides.length;
  } else if (n > slides.length) {
    slidesIndex = 1;
  }
  for (
    let i = 0;
    i < slides.length;
    i++
  ) {
    slides[i].style.display = "none";
  }
  for (
    let i = 0;
    i < dots.length;
    i++
  ) {
    dots[i].classList.remove("active");
  }
  slides[
    slidesIndex - 1
  ].style.display = "block";
  dots[slidesIndex - 1].classList.add(
    "active"
  );
}
function plusSlides(n) {
  showSlides((slidesIndex += n));
}

function currentSlide(n) {
  showSlides((slidesIndex = n));
}

prevBtn.onclick = function () {
  plusSlides(-1);
};

nextBtn.onclick = function () {
  plusSlides(1);
};

dotsarea.onclick = function (e) {
  for (
    let i = 0;
    i < dots.length + 1;
    i++
  ) {
    if (
      e.target.classList.contains(
        "dots-item"
      ) &&
      e.target == dots[i - 1]
    ) {
      currentSlide(i);
    }
  }
};
