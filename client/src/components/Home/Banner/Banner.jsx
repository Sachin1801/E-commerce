import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (<div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Welcome</h1>
                <p>Discover an array of cutting-edge electronic gadgets, including smartwatches, headphones, and wireless 
                    speakers, on our website. Elevate your tech game with our curated selection of modern accessories.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
                <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div> 
    );
};

export default Banner;
