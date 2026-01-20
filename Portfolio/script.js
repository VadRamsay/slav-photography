const pages = [
    { name: "Portfolio - Landscapes", url: "/Portfolio/index.html", tags: "mountains, city, sun, waves" },
    { name: "Pricing & Packages", url: "/Pricing/", tags: "cost, silver, gold, wedding" },
    { name: "About Gabe", url: "/About/index.html", tags: "biography, story, freshman" },
    { name: "Contact Me", url: "/Contact/index.html", tags: "email, phone, booking" },
    { name: "Home", url: "/Home/index.html", tags: "main, gallery" }
];

const UNSPLASH_API_KEY = 'TPeoBJ2BnMz3HFXhIj8PhKIhf1N8pJi4tYfoVXNVjwM';
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

// Nav bar Search
function executeSearch() {
    const query = document.getElementById('site-search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results-dropdown');

    resultsContainer.innerHTML = '';

    if (query.length < 1) {
        resultsContainer.style.display = 'none';
        return;
    }

    const matches = pages.filter(page =>
        page.name.toLowerCase().includes(query) ||
        page.tags.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        matches.forEach(match => {
            const link = document.createElement('a');
            link.href = match.url;
            link.classList.add('search-item');
            link.innerHTML = `<strong>${match.name}</strong>`;
            resultsContainer.appendChild(link);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}

// API Search
async function searchPhotos() {
    const query = document.getElementById('photo-search-input').value;
    const results = document.getElementById('photo-results');

    if (query.length < 1) {
        results.innerHTML = '<p>Did you even type anything!</p>';
        return;
    }

    results.innerHTML = '<p>Loading photos...</p>';

    try {
        const response = await fetch(`${UNSPLASH_API_URL}?query=${encodeURIComponent(query)}&per_page=8&client_id=${UNSPLASH_API_KEY}`);

        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();

        results.innerHTML = '';

        if (data.results.length === 0) {
            results.innerHTML = '<p>No photos found</p>';
            return;
        }

        data.results.forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-card');
            photoDiv.innerHTML = `
                <a href="${photo.links.html}" target="_blank">
                    <img src="${photo.urls.small}" alt="${photo.alt_description || 'Photo'}">
                    <div class="photo-info">
                        <p>${photo.alt_description || 'Unsplash Photo'}</p>
                        <small>by ${photo.user.name}</small>
                    </div>
                </a>
            `;
            results.appendChild(photoDiv);
        });
    } catch (error) {
        console.error('Error fetching from Unsplash:', error);
        results.innerHTML = '<p>Error fetching photos. Please check your API key.</p>';
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('photo-search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchPhotos();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-site')) {
            document.getElementById('search-results-dropdown').style.display = 'none';
        }
    });
});