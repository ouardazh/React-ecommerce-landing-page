import './Header.css'
function Header(){
    return(
        <header>
            <div>
                <div className='containerLogo'>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <div>
                        <h3 className='logo'>Shop<span>Eco</span></h3>
                        <p>Shop Smart, Live Better</p>
                    </div>
                </div>
            </div>

            <nav>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Why Us</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}
export default Header;