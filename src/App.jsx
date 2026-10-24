import "./App.css";
import Header from "./layouts/Header";
import { Hero, Product, Whyus } from "./pages/Home/Home";
import Footer from "./layouts/Footer";
import nikeImage from './assets/img/img1.jfif'
import watchImage from './assets/img/watch.jfif'
import parfumImage from './assets/img/img3.jfif'
import bagImage from './assets/img/img5.avif'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="containerCart">
        
        <Product inStock={false} image={nikeImage} name="Nike" description="Air Force 1" price="299 MAD" />
        <Product
          inStock={true}
          image={watchImage}
          name="Apple Watch"
          description="Air Force 1"
          price="1 299 MAD"
        />
        <Product inStock={true} image={parfumImage} name="Nike" description="Air Force 1" price="299 MAD" />
        <Product inStock={true} image={bagImage} name="Nike" description="Air Force 1" price="299 MAD" />
      </div>

      <Whyus />

      <Footer />
    </>
  );
}

export default App;
