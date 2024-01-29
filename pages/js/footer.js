const footroot = window.location.origin;

const footerHtml = `
<footer>
<div class="footer1">
    <div class="img101">
        <a href="${footroot}/index.html"> <img src="${footroot}/assets/images/Fert agri.png" alt="logo"> </a>
    </div>
    <div class="about111">
        <div class="quick">
            <h2>QUICK LINKS</h2>
            <p> <a href="./about_us.html">ABOUT US</a></p>
            <p> <a href="./wishlist.html">WISHLIST</a></p>
            <p> <a href="./offers.html">OFFERS</a></p>
            <p> <a href="./user_interface.html">HOME</a></p>
        </div>
        <div class="quick">
            <h2>BRANDS</h2>
            <p><a href="./dhanuka.html">DHANUKA</a></p>
            <p> <a href="./dow_agro.html">DOW AGRO SCIENCE</a></p>
            <p><a href="./upl.html">UPL</a></p>
            <p> <a href="./tata.html"> TATA RALLIS</a></p>
            <p><a href="./adama.html">ADAMA</a></p>
            <p><a href="./bayer.html">BAYER</a></p>
        </div>
        <div class="quick">
            <h2>CROP PROTECTION</h2>
            <p><a href="./insecticides.html">BIO INSECTICIDES</a></p>
            <p><a href="./fungicides.html">BIO FUNGICIDES</a></p>
            <p><a href="./nematicides.html">BIO NEMATICIDES</a></p>
            <p><a href="./viricides.html"> BIO VIRCIDES</a></p>
        </div>
        <div class="quick">
            <h2>CONTACT US</h2>
            <div class="rboomi">
                <h3>EMAIL</h3>
                <p> rboomibalan459@gmail.com</p>
            </div>
            <div class="rboomi">
                <h3>PHONE</h3>
                <p>+919629223356</p>
            </div>
            <div class="rboomi">
                <h3>ADDRESS</h3>
                <p> 1/115, Thirumurugan street, Mandumandram Nagar, Tiruchippalli-620021</p>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="cont">
            <p>FOLLOW US</p>
        </div>
        <div class="social">
            <a href="https://www.instagram.com/rp0803/?igshid=YmMyMTA2M2Y%3D"> <img
                    src="../../assets/images/instagram.png" alt="instagram"></a>
            <a href="https://www.youtube.com/channel/UCufA2FcZ-8DSsbCog424g_g"><img
                    src="../../assets/images/youtube.webp" alt="youtube"></a>
            <a href="https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=app"><img
                    src="../../assets/images/mail.jpg" alt="email"></a>
            <a href="https://twitter.com/agrigoi?lang=en"><img src="../../assets/images/twiter.png"
                    alt="twitter"></a>
            <a href="https://www.facebook.com/people/Agriculture/100068310005265/"><img
                    src="../../assets/images/facebook.png" alt="facebook"></a>
            <a href="#"><img src="../../assets/images/whatsapp.webp" alt="whatsapp"></a>

        </div>
    </div>
</div>
</footer>
<div class="mobile_footer">
<div class="mobile_aboutus">
    <a href="./user_interface.html">Home</a>
    <a href="about_us.html">
        <p>About Us</p>
    </a>
    <p>(+91)9629223356</p>

</div>
<div class="copyright">
    <p> Copyright © 2021 - 2023 FAB - Designed By </p><span>Boobalan-R</span>
</div>
<div class="mobile_social">
    <p>Contact Us</p>
    <div>
        <a href="https://twitter.com/agrigoi?lang=en"><img src="../../assets/images/twiter.png"
                alt="twitter"></a>
        <a href="https://www.youtube.com/channel/UCufA2FcZ-8DSsbCog424g_g"><img
                src="../../assets/images/youtube.webp" alt="youtube"></a>
        <a href="https://www.facebook.com/people/Agriculture/100068310005265/"><img
                src="../../assets/images/facebook.png" alt="facebook"></a>
    </div>
</div>
</div>`;

document.footer.insertAdjacentHTML("afterbegin", footerHtml);
