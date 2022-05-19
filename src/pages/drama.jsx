import Movies from "./movies";
import "../styles/Home.css"


const Drama = (props) => {

  return (
    <div className="homeBaseContainer">
        <Movies category={'drama'}/>   
    </div>
  );
};



export default Drama;
