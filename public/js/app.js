(() => {
  const copyButton = document.getElementById('copyButton');
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  async function copyText(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const helper = document.createElement('textarea');
        helper.value = value;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        const copied = document.execCommand('copy');
        helper.remove();
        if (!copied) throw new Error('Copy command was not available');
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const value = copyButton.dataset.copy;
      const copied = await copyText(value);
      if (copied) {
        copyButton.textContent = 'Copied!';
        showToast('Short link copied to clipboard.');
        setTimeout(() => { copyButton.textContent = 'Copy link'; }, 1800);
      } else {
        showToast('Copy unavailable — select the link and copy it manually.');
      }
    });
  }

  const form = document.getElementById('shortenForm');
  const urlInput = document.getElementById('longUrl');
  if (form && urlInput) {
    form.addEventListener('submit', (event) => {
      const value = urlInput.value.trim();
      try {
        const parsed = new URL(value);
        if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported protocol');
      } catch (_) {
        event.preventDefault();
        urlInput.setCustomValidity('Enter a valid URL starting with http:// or https://');
        urlInput.reportValidity();
      }
    });
    urlInput.addEventListener('input', () => urlInput.setCustomValidity(''));
  }
})();
