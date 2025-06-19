document.addEventListener('DOMContentLoaded', () => {
    const items     = document.querySelectorAll('.navbar-item');
    const sections  = Array.from(items).map(i => document.getElementById(i.dataset.target));
    const options   = { root: null, rootMargin: '0px', threshold: 0.5 };
    let ignoreSpy  = false;
    let spyTimeout;
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
  
        document.getElementById(item.dataset.target)
                .scrollIntoView({ behavior: 'smooth', block: 'start' });
  
        ignoreSpy = true;
        clearTimeout(spyTimeout);
        spyTimeout = setTimeout(() => { ignoreSpy = false; }, 600);
      });
    });
  
    const observer = new IntersectionObserver((entries) => {
      if (ignoreSpy) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach(i => i.classList.remove('active'));
          const idx = sections.indexOf(entry.target);
          if (idx >= 0) items[idx].classList.add('active');
        }
      });
    }, options);
  
    sections.forEach(sec => sec && observer.observe(sec));
    items[0]?.classList.add('active');
  });
  

function ham() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}