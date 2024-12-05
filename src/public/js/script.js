const shortenBtn = document.getElementById('shorten-btn');
const urlInput = document.getElementById('url');
const form = document.getElementById('form');
const success = document.getElementById('success');
const shortUrl = document.getElementById('short-url');
const copyBtn = document.getElementById('copy-btn');

const BASE_URL = 'http://localhost:3000';

shortenBtn.addEventListener('click', async () => {
  const url = urlInput.value;

  if (!url) {
    alert('Please enter a URL');
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/slug`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to shorten URL');
    }

    const data = await response.json();
    const shortenedUrl = data.slug.slugURL; // Assuming the API returns the shortened URL in this field

    shortUrl.href = shortenedUrl;
    shortUrl.textContent = shortenedUrl;
    success.style.display = 'block';
  } catch (error) {
    alert(error.message);
  }
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(shortUrl.href)
    .then(() => {
      alert('Short URL copied to clipboard!');
    })
    .catch(() => {
      alert('Failed to copy URL.');
    });
});
