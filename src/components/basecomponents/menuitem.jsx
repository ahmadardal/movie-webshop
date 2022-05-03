import { Link } from "react-router-dom";
import "../../styles/menuItem.css";

const MenuItem = ({title, image, navigatesTo}) => {
  return (
    <Link to={`/${navigatesTo}`} style={{textDecoration: 'none'}}>
    <div className="menuItemContainer">
        <div className="menuItemImageContainer">
      <img src={image} alt="dog" id="MenuItemImage" />
      </div>
      <div className="menuItemTitle">
          <h1>{title}</h1>
          </div>
    </div>
    </Link>
  );
};

export default MenuItem;
