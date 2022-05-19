import Movies from "./movies";
import "../styles/Home.css"


const Horror = (props) => {

  return (
    <div className="homeBaseContainer">
        <Movies category={'horror'}/>   
    </div>
  );
};



export default Horror;
