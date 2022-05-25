import '../../styles/shoppingCart.css';
import CardImg from '../../assets/cart.png'


const TotalPrice = ({totalPrice, itemCount}) =>{
    return (
        <div className="shoppingCartPrice">

            <h3>Go to checkout</h3>

            <div className="allCartItems"
                style={{ background: `url("${CardImg}") no-repeat center/cover` }}>
                <div className="itemsAmountWrap">
                    <p>{itemCount}</p>
                </div>
            </div>
        </div>
    )

}


export default TotalPrice;