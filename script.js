const copyButton = document.querySelector('.copy-id');
const toast = document.querySelector('.toast');
const backButton = document.querySelector('[data-back-button]');

backButton.addEventListener('click', () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
});

copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(copyButton.dataset.copy);
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
});