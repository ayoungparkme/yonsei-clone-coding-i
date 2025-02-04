Splitting();
AOS.init();
const current = document.querySelector("#community .fraction .current");
const newsSlider = new Swiper("#main-visual .news", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
});
new Swiper("#main-visual .mask .main-mask", {
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
  controller: {
    control: newsSlider,
  },
});
new Swiper("#main-visual .notice-mask", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: "#main-visual .notice-mask .fraction-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: "#main-visual .notice-mask .btn-prev",
    nextEl: "#main-visual .notice-mask .btn-next",
  },
});

new Swiper("#research .mask", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: "#research .btn-prev",
    nextEl: "#research .btn-next",
  },
});
new Swiper("#community .mask", {
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#community .btn-prev",
    nextEl: "#community .btn-next",
  },
  pagination: {
    el: "#community .pagination",
    type: "progressbar",
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    slideChange: function (swiper) {
      const idx = swiper.realIndex;
      const list = document.querySelectorAll("#community .link li");
      current.textContent = "0" + (idx + 1);
      for (let i = 0; i < 4; i++) {
        list[i].classList.remove("on");
      }
      const selectedItem = document.querySelector(`#community .link li:nth-child(${idx + 1})`);
      selectedItem.classList.add("on");
    },
  },
});

gsap.from("#main-visual .title .char", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  ease: "bounce",
  stagger: {
    amount: 1.5,
    from: "random",
  },
});

const fundList = document.querySelectorAll(".fund-list li");
const total = fundList.length;
for (let i = 0; i < total; i++) {
  fundList[i].addEventListener("click", function () {
    for (let j = 0; j < total; j++) {
      fundList[j].classList.remove("on");
    }
    fundList[i].classList.add("on");
  });
}
//event driven
//객체가 가지는 함수 == methods
//객체가 가지는 변수 == properties

btnTop.addEventListener("click", function () {
  gsap.to(window, { scrollTo: 100, duration: 1 });
});

document.querySelector(".family-site button").addEventListener("click", function () {
  document.querySelector(".family-site").classList.toggle("on");
});
