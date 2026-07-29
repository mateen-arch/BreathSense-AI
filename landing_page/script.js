document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Track APK Download Click
  const downloadBtns = document.querySelectorAll('a[download]');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('[BreathSense AI] Download APK initiated by user.');
    });
  });
});
