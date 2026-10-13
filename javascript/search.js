document.addEventListener('DOMContentLoaded', () => {
    // Inject search bar into page title section so it doesn't break grid columns
    const pageTitleSection = document.querySelector('.page-title');
    const productGrid = document.querySelector('.product-grid');
    
    if (pageTitleSection && productGrid) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'catalog-search-wrapper';
        searchContainer.style.cssText = 'max-width: 600px; margin: 20px auto 0 auto; text-align: left;';
        searchContainer.innerHTML = `
            <label for="liveProductSearch" style="display: block; font-weight: bold; margin-bottom: 6px; color: #2e7d32;">
                🔍 Quick Product Search:
            </label>
            <input type="text" id="liveProductSearch" class="form-input" 
                   placeholder="Search products by name or category (e.g., Chicken, Dairy, Maize)..." 
                   style="width: 100%; padding: 10px 14px; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        `;
        
        pageTitleSection.appendChild(searchContainer);

        const searchInput = document.getElementById('liveProductSearch');
        const productCards = document.querySelectorAll('.product-card');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            productCards.forEach(card => {
                const title = card.querySelector('h4') ? card.querySelector('h4').textContent.toLowerCase() : '';
                const desc = card.querySelector('.product-desc') ? card.querySelector('.product-desc').textContent.toLowerCase() : '';
                const badge = card.querySelector('.category-badge') ? card.querySelector('.category-badge').textContent.toLowerCase() : '';

                if (title.includes(query) || desc.includes(query) || badge.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});