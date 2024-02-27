import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <img src={require("./Images/shadow.png")} alt="" />
          <div className="top">
            <div className="knowledge">
              <p>Gardening Knowledge</p>
              <span>Blogs - Plant Talks</span>
              <span>Blog - Kitchen Gardening</span>
              <span>Blogs - Top 10 Plants</span>
              <span>Blogs - Sustainable Living</span>
              <span>https://blog.nurserylive.com/</span>
              <span>https://wiki.nurserylive.com/</span>
            </div>
            <div className="useful">
              <p>Useful Links</p>
              <span>Track Order</span>
              <span>Orders</span>
              <span>Wishlist</span>
              <span>FAQ's</span>
              <span>Offers</span>
              <span>Rewards</span>
              <span>Affiliate</span>
            </div>
            <div className="about">
              <p>About</p>
              <span>About Nurserylive</span>
              <span>Contact us</span>
              <span>Privacy Policy</span>
              <span>Refund Policy</span>
              <span>Shipping Policy</span>
              <span>Terms of Service</span>
              <span>Jobs</span>
            </div>
            <div className="subscribe">
              <p>Subscribe</p>
              <span>
                Join us to receive gardening tips, offers, news & more
              </span>
              <span>getgreennilambur@gmail.com</span>
            </div>
          </div>
          <div className="bottom">
            <div className="social-medias">
              Follow Us
              <span>
                <img src={require("./Images/facebook (1).png")} alt="" />
              </span>
              <span>
                <img src={require("./Images/instagram.png")} alt="" />
              </span>
              <span>
                <img src={require("./Images/linkedin.png")} alt="" />
              </span>
              <span>
                <img src={require("./Images/pinterest.png")} alt="" />
              </span>
              <span>
                <img src={require("./Images/twitter (1).png")} alt="" />
              </span>
              <span>
                <img src={require("./Images/youtube.png")} alt="" />
              </span>
            </div>

            <div className="branches">
              <span>
                All India | Banglore | Hydrabad | Chennai | Delhi | Kolkata |
                Mumbai | Gurgaon | Pune | Trivandrum | Noida | Ahmedabad |
                Chandigarh | Kochi | Indore | Ptna | Guwahati
              </span>
            </div>
            <div className="copyright">
              <span>Copyright © 2024 GetGreenlive.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
