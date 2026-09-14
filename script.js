// script.js

const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

function filterProducts() {
  const query = searchInput.value.toLowerCase().trim();

  productCards.forEach(card => {
    // Get title and body text inside each card
    const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';

    // Check if search query appears in title or description
    if (title.includes(query) || description.includes(query)) {
      card.style.display = ''; // Shows the card
    } else {
      card.style.display = 'none'; // Hides the card
    }
  });
}

// Filter dynamically as the user types
if (searchInput) {
  searchInput.addEventListener('input', filterProducts);
}