document.addEventListener('DOMContentLoaded', () => {
    const items     = document.querySelectorAll('.navbar-item');
    const sections  = Array.from(items).map(i => document.getElementById(i.dataset.target));
    const options   = { root: null, rootMargin: '0px', threshold: 0.5 };
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.dataset.target)
                .scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach(i => i.classList.remove('active'));
          const idx = sections.indexOf(entry.target);
          if (idx >= 0) items[idx].classList.add('active');
        }
      });
    }, options);
  
    
    sections.forEach(sec => { if (sec) observer.observe(sec); });
  
    items[0]?.classList.add('active');
  });
  