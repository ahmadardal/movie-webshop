import '../../styles/shoppingCart.css'
import image from '../../assets/batman.png'



const ShoppingCart = ({cartItems}) => {
    return (
        <div className="shoppingCart">
        {/* {cartItems.map(item => ( */}
            <div  className="cardRow">
                <div className="cardImg">
                    <p>3</p>
                    <img src={image} alt='movie' />
                </div>
                <div className="cardPrice">
                    <p>{200}$</p>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        {/* ))} */}
    </div>
    )

}


export default ShoppingCart;