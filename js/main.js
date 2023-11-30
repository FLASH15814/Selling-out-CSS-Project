// Image Slider 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})







//////////
const sections = document.querySelectorAll('.animated');

const fadeInOptions = {
  threshold: 0.5, // Adjust as needed
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, fadeInOptions);

sections.forEach((section) => {
  fadeInObserver.observe(section);
});

////////





// Product page slideshow
const items = document.querySelectorAll(".item"),
  controls = document.querySelectorAll(".control"),
  headerItems = document.querySelectorAll(".item-header"),
  descriptionItems = document.querySelectorAll(".item-description"),
  activeDelay = 0.76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach((control) =>
      control.addEventListener("click", (e) => {
        slider.clickedControl(e);
      })
    );
    controls[current].classList.add("active");
    items[current].classList.add("active");
  },
  nextSlide: () => {
    // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add("active");
    items[current].classList.add("active");
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => {
    // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add("active");
    items.forEach((item, index) => {
      if (index === dataIndex) {
        // Add active class to corresponding slide
        item.classList.add("active");
      }
    });
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => {
    // Remove active classes
    items.forEach((item) => item.classList.remove("active"));
    controls.forEach((control) => control.classList.remove("active"));
  },
  transitionDelay: (items) => {
    // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;

    items.forEach((item) => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;

      item.classList.value === "item-header"
        ? (seconds = 0.015)
        : (seconds = 0.007);

      children.forEach((child) => {
        // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains("active")
            ? (delay = count * seconds + activeDelay)
            : (delay = count * seconds);
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      });
    });
  }
};

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();


//Range Slider
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 255) + "px";
}


//Video loop
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

