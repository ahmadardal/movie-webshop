import Movies from "./movies";
import "../styles/Home.css"


const Comedy = (props) => {

  return (
    <div className="homeBaseContainer">
        <Movies category={'comedy'}/>   
    </div>
  );
};



export default Comedy;
