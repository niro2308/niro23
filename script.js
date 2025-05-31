const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--bg-color') === '#000000';

  if (isDark) {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--link-color', '#1a0dab');
  } else {
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--link-color', '#8ab4f8');
  }
});
