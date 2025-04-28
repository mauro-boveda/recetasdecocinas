// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode')
    ? 'Cambiar a Modo Claro'
    : 'Cambiar a Modo Oscuro';
});

// Check for user's preferred theme (optional)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Cambiar a Modo Claro';
}
