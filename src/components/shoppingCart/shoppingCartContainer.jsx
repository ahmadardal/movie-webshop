
import ShoppingCart from './shoppingCart';
import TotalPrice from './totalPrice';

const ShoppingCartContainer = ({ hiddenMenu, setHiddenMenu, itemCount }) => {
    return (
        <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
            <ShoppingCart />
            <TotalPrice />
        </div>
    )
}

export default ShoppingCartContainer;

// {`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}