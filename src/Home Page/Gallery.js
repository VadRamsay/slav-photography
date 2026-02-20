import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
    return (
        <section className="gallery-section">
            <Carousel>
                <Carousel.Item>
                    <div className="img-container">
                        <img src="/Images/City.jpg" className="multi-img" alt="City" />
                        <img src="/Images/Web.jpg" className="multi-img" alt="Web" />
                        <img src="/Images/Hand.jpg" className="multi-img" alt="Hand" />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="img-container">
                        <img src="/Images/Mountains.jpg" className="multi-img" alt="Mountains" />
                        <img src="/Images/Sun.jpg" className="multi-img" alt="Sun" />
                        <img src="/Images/Crosswalk.jpg" className="multi-img" alt="Crosswalk" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Gallery;