import { useEffect } from "react";
import image from '../../assets/batman.png'



const ShoppingCart = ({ movie, removeItem, cartItems }) => {

    useEffect(() => {
        console.log('Individual movie: ', movie);
      }, []);



    return (
        <div className="shoppingCart">
            {cartItems.map(item => (
                <div key={item.movie.id} className="cardRow">
                    <div className="cardImg">
                    <h3>{item.movie.title}</h3>
                        <p>x {item.quantity}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${item.movie.poster_path}`} alt='movie' />
                    </div>
                    <div className="cardPrice">
                        <p>{item.movie.price} kr</p>
                        <i onClick={() => removeItem(item.movie.id)} className="fas fa-times"></i>
                    </div>
                </div>
            ))}
        </div>
    )

}


export default ShoppingCart;


