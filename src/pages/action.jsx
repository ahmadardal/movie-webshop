import Movies from "./movies";
import "../styles/Home.css"


const Action = (props) => {

  return (
    <div className="homeBaseContainer">
        <Movies category={'action'}/>   
    </div>
  );
};



export default Action;
