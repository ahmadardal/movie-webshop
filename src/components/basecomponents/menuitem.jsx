import { Link } from "react-router-dom";
import "../../styles/menuItem.css";

const MenuItem = ({title, image, navigatesTo}) => {
  return (
    <Link to={`/${navigatesTo}`} style={{textDecoration: 'none'}}>
    <div className="itemContainer">
        <div className="imageContainer">
      <img src={image} alt="dog" id="itemImage" />
      </div>
      <div className="itemTitle">
          <h1>{title}</h1>
          </div>
    </div>
    </Link>
  );
};

export default MenuItem;
