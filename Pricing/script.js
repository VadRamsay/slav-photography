const pages = [
    { name: "Portfolio - Landscapes", url: "/Portfolio/index.html", tags: "mountains, city, sun, waves" },
    { name: "Pricing & Packages", url: "/Pricing/", tags: "cost, silver, gold, wedding" },
    { name: "About Gabe", url: "/About/index.html", tags: "biography, story, freshman" },
    { name: "Contact Me", url: "/Contact/index.html", tags: "email, phone, booking" },
    { name: "Home", url: "/Home/index.html", tags: "main, gallery" }
];

const UNSPLASH_API_KEY = 'TPeoBJ2BnMz3HFXhIj8PhKIhf1N8pJi4tYfoVXNVjwM';
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';


function executeSearch() {
    const query = $('#site-search').val().toLowerCase();
    const $resultsContainer = $('#search-results-dropdown');

    $resultsContainer.empty();

    if (query.length < 1) {
        $resultsContainer.hide();
        return;
    }
