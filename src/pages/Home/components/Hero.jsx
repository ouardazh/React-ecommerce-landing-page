import "./Hero.css";
import image from "../../../assets/img/photo.png";
function Hero() {
  return (
    <section className="heroSection">
      <div className="containerHero">
        <div>
          <p className="firstParagraph">LIMITED TIME ONLY</p>

          <h1 className="title">
            Shop More, <span>Save More!</span>
          </h1>
          <p className="secondParagraph">
            Discover amazing deals on your 
            favorite products.
          </p>

          <button className="exploreBtn">EXPLORE COLLECTION ➜</button>
        </div>
        <div className="containerImage">
          <img src={image} alt="" />
        </div>
      </div>

      <p className="smallParagraph">Our Collection</p>
      <h2 className="titleProduct">Best Selling <span>Products</span> </h2>
    </section>
  );
}
export default Hero;
