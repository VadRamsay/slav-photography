const pages = [
    { name: "Portfolio - Landscapes", url: "/Portfolio/index.html", tags: "mountains, city, sun, waves" },
    { name: "Pricing & Packages", url: "/Pricing/", tags: "cost, silver, gold, wedding" },
    { name: "About Gabe", url: "/About/index.html", tags: "biography, story, freshman" },
    { name: "Contact Me", url: "/Contact/index.html", tags: "email, phone, booking" },
    { name: "Home", url: "/Home/index.html", tags: "main, gallery" }
];

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
            const div = document.createElement('a');
            div.href = match.url;
            div.classList.add('search-item');
            div.innerHTML = `<strong>${match.name}</strong>`;
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}

document.addEventListener('click', (e) => {
    if (!document.querySelector('.search-site').contains(e.target)) {
        document.getElementById('search-results-dropdown').style.display = 'none';
    }
});
