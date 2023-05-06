import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return(
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sale</h1>
                    <h2>40% off</h2>
                    <p>
                    Experience sound and style like never before with Techkart - your ultimate destination for cutting-edge headphones, speakers, 
                    earbuds, and smartwatches.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    ) 
};

export default Banner;
