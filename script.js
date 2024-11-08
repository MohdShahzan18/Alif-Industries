const texts = ["or Caps & Closures", "Electroplating Rectifier"];
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById('text').textContent = texts[index];
}, 1500); 


// About
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    }, { threshold: 0.25 }); // Trigger when 25% of the element is in the viewport

    // Elements to observe
    const aboutHeading = document.querySelector('.about-heading');
    const aboutProduct = document.querySelector('.about-product');

    observer.observe(aboutHeading);
    observer.observe(aboutProduct);

    // Check if elements are in view already when the page loads
    window.addEventListener('load', () => {
      if (isInViewport(aboutHeading)) {
        aboutHeading.classList.add('visible');
      }
      if (isInViewport(aboutProduct)) {
        aboutProduct.classList.add('visible');
      }
    });
  } else {
    // If IntersectionObserver is not supported, force the elements to animate immediately
    document.querySelector('.about-heading').classList.add('visible');
    document.querySelector('.about-product').classList.add('visible');
  }

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

