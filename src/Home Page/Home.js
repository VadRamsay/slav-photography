import Hero from './Hero';
import Gallery from './Gallery';
import './Home.css';

function Home() {
    return (
        <div className="page-container">
            <Gallery />
            <Hero />
        </div>
    )
}

export default Home;