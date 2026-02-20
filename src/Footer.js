function Footer() {
    return (
        <footer className="footer">
            <div className="footer-images">
                <img src="/Images/City.jpg" alt="" />
                <img src="/Images/Web.jpg" alt="" />
                <img src="/Images/Hand.jpg" alt="" />
                <img src="/Images/Mountains.jpg" alt="" />
                <img src="/Images/Sun.jpg" alt="" />
            </div>

            <div className="footer-banner">
                <span><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>INSTAGRAM</a></span>
                <span>@SLAV.PHOTOGRAPHY</span>
            </div>

            <p className="copyright">@ Slav Photography</p>
        </footer >
    )
}

export default Footer;
