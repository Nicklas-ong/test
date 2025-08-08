/* JavaScript to trigger animations when scrolling */
const timelineEvents = document.querySelectorAll('.timeline-event');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

timelineEvents.forEach(event => {
  observer.observe(event);
});