
import ShoppingCart from './shoppingCart';
import TotalPrice from './totalPrice';

const ShoppingCartContainer = (props) => {
    const { hiddenMenu, cartItems, totalPrice, itemCount, removeItem } = props;
    return (
       <div className='shoppingCartContainer'>
            <ShoppingCart cartItems={cartItems} removeItem={removeItem} />
            <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
        </div>
    )
}

export default ShoppingCartContainer;

// {`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}

// <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>