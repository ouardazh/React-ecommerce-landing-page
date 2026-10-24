import './Footer.css'
function Footer(){
    return (
        <footer>

            <div className='offers'>
                <div>
                    <h4>Get Exclusive Offers & Updates</h4>
                    <p>Sign up now to get 10% OFF on your order!</p>
                </div>

                <div className='containerinput'>
                    <input type="text" placeholder='Enter your email address' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className='containerFooter'>
                <div>
                <div className='containerLogo'>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <div>
                        <h3 className='logo'>Shop<span>Eco</span></h3>
                        <p>Shop Smart, Live Better</p>
                    </div>
                </div>
                
            </div>
            

            <div>
                <div className='contactFooter'>
                     <i class="fa-regular fa-envelope"> </i>
                     <p>support@shopeeco.com</p>
                </div>

                <div className='contactFooter'>
                    <i class="fa-solid fa-phone"></i>
                    <p>+1 234 567 8900</p>
                </div>
                <div className='contactFooter'>
                    <i class="fa-solid fa-location-dot"> </i>
                    <p> 123 New York, NY 10001</p>
                </div>
               
            </div>

            </div>
            <p className='copyright'>&copy; 2026 ShopeEco. All rights reserved. </p>

            
            
        </footer>
        
    )
}
export default Footer;