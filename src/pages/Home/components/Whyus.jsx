import './Whyus.css'
function Whyus(){
    return(
        <section className='whyusSection'>
            <div>
                <p className='whyusParagraph'>Why Choose Us</p>
                <h3 className='whyusTitle'>Why Choose ShopEco?</h3>
                <p className='whyusParag'>We are committed to providing you with the best <br />
                shopping experience, with quality products and <br />
                exceptional service. </p>

                <p className='whyusParagraph'>────</p>
            </div>

            <div className='card'>
                <p className='icon'>
                   <i class="fa-solid fa-truck-moving"></i> 
                </p>
                
                <h4>Free Shipping</h4>
                <p className='whyusParag'>Fast and free delivery <br />
                an orders over 500 MAD. </p>
            </div>

            <div className='card'>
                <p className='icon'>
                   <i class="fa-solid fa-shield-heart"></i> 
                </p>
                
                <h4>Secure Payments</h4>
                <p className='whyusParag'>Your information is always <br />
                safe with us. </p>
            </div>

            <div className='card'>
                <p className='icon'>
                   <i class="fa-solid fa-headset"></i> 
                </p>
                
                <h4>24/7 Support</h4>
                <p className='whyusParag'>We're here to help you <br />
                anytime, anywhere. </p>
            </div>
        </section>
    )
}
export default Whyus;