import Movies from "./movies";
import "../styles/Home.css"


const Home = (props) => {

  return (
    <div className="homeBaseContainer">
      {/* Här ska movie slider vara */}
        <Movies />   
    </div>
  );
};



export default Home;
