import "./Product.css";


function Product({inStock, image, name, description, price }) {
 
  return (
    <section className="productSection">
      
      <div className="containerCard">
        <p >{inStock}</p>
        <img src={image} alt="" />

        <div className="infoProduct">
          
          <h3>{name} </h3>
          <p> {description} </p>
          <p className="priceProduct">{price} </p>
          {inStock ? (
            <button  className="addBtn">Add to Cart</button>
          ) : (
            <p className="outofstock">Out off Stock</p>
          )}
          {/* <button disabled={!inStock} className="addBtn">Add to Cart</button> */}
        
        </div>
      </div>

      
    </section>
  );
}
export default Product;
