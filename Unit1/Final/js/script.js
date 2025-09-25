
const button = document.getElementById('searchButton');
const input = document.getElementById('userInput');

button.addEventListener('click', function () {
  const q = (input.value || '').trim();
  const url = 'https://www.indigo.ca/en-ca/search?q=' + encodeURIComponent(q);
  window.open(url, '_blank');
});

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const q = (input.value || '').trim();
    const url = 'https://www.indigo.ca/en-ca/search?q=' + encodeURIComponent(q);
    window.open(url, '_blank');
  }
});

document.getElementById('clearButton').addEventListener('click', () => {
  document.getElementById('userInput').value = '';
  document.getElementById('userInput').focus();
})