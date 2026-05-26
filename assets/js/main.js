    const sectionTwo = document.querySelector('.section-two');
    const sectionThree = document.querySelector('.section-three');

    const revealOnScroll = (section, threshold = 0.28) => {
      if (!section) return;
      if (!('IntersectionObserver' in window)) {
        section.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold }
      );

      observer.observe(section);
    };

    revealOnScroll(sectionTwo, 0.28);
    revealOnScroll(sectionThree, 0.32);

    const accordionItems = document.querySelectorAll('.audience .accordion details');
    accordionItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        accordionItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
