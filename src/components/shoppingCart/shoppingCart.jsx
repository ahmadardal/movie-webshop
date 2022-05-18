import { useEffect } from "react";
import image from '../../assets/batman.png'



const ShoppingCart = ({ movie, removeItem }) => {

    useEffect(() => {
        console.log('Individual movie: ', movie);
      }, []);

return (
    <div className="shoppingCart">
            <div key={movie.movie.id} className="cardRow">
                <div className="cardImg">
                    <h3>{movie.movie.title}</h3>
                    <p>x {movie.quantity}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.movie.poster_path}`} alt='movie' />
                </div>
                <div className="cardPrice">
                    <p>{movie.movie.price} kr</p>
                    <i onClick={() => removeItem(movie.movie.id)} className="fas fa-times"></i>
                </div>
            </div>
    </div>
)
}


export default ShoppingCart;


