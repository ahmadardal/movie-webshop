
import image from '../../assets/batman.png'



const ShoppingCart = ({ cartItems, removeItem }) => {

return (
    <div className="shoppingCart">
        {cartItems.map(item => (
            <div key={item.id} className="cardRow">
                <div className="cardImg">
                    <h3>{item.movieName}</h3>
                    <p>x {item.cartCount}</p>
                    <img src={item.img} alt='movie' />
                </div>
                <div className="cardPrice">
                    <p>{item.price} kr</p>
                    <i onClick={() => removeItem(item.movieId)} className="fas fa-times"></i>
                </div>
            </div>
        ))}
    </div>
)
}


export default ShoppingCart;


