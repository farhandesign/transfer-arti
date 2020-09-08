const header = document.querySelector("header");
const sectionOne = document.querySelector(".observer");


const sectionOneOptions = {
    rootMargin: "100px 0px 0px 0px",
    threshold: 0.05
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          header.classList.add("header-scrolled");         
      } else {
          header.classList.remove("header-scrolled");         
      }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);