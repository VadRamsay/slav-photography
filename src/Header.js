import { useState } from 'react';

const pages = [
    { name: "Portfolio - Landscapes", url: "/Portfolio/index.html", tags: "mountains, city, sun, waves, ideas" },
    { name: "Pricing & Packages", url: "/Pricing/", tags: "cost, silver, gold, wedding" },
    { name: "About Gabe", url: "/About/index.html", tags: "biography, story, freshman" },
    { name: "Contact Me", url: "/Contact/index.html", tags: "email, phone, booking" },
    { name: "Home", url: "/Home/index.html", tags: "main, gallery" }
];

function Header() {
    const [query, setQuery] = useState('');

    const matches = pages.filter(page =>
        query.length > 0 && (
            page.name.toLowerCase().includes(query.toLowerCase()) ||
            page.tags.toLowerCase().includes(query.toLowerCase())
        )
    );

    {
        matches.map(match => (
            <a key={match.url} href={match.url} className="search-item">
                <strong>{match.name}</strong>
            </a>
        ))
    }

    return (
        <header>
            <nav>
                <a href="/" className="logo">Slav Photography</a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/pricing">Packages</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li className="search-site">
                        <input
                            type="text"
                            id="searchBar"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {matches.length > 0 && (
                            <div className="search-results">
                                {matches.map(match => (
                                    <a key={match.url} href={match.url} className="search-item">
                                        <strong>{match.name}</strong>
                                    </a>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Header;