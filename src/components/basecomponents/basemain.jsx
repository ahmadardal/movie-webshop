import "../../styles/BaseComponent.css";
import MenuItem from "./menuitem";
import Search from "../search";
import Promotional from "../promotional";
import Movies from "../movies";
import MovieCard from "../MovieCard";
// import "../assets/happy.png";

const BaseMain = ({ headerContent, mainContent, footerContent }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f8f8",
        display: "flex",
      }}
    >
      <div className="Sidebar">
        <MenuItem
          title="Hem"
          image={require("../../assets/home.png")}
          navigatesTo=""
        />
        <MenuItem
          title="Register"
          image={require("../../assets/happy.png")}
          navigatesTo="Register"
        />
      </div>

      <div className="contentContainer">
        <div className="headContent">
          {headerContent}
          <Search />
          <MovieCard />
        </div>

        <div className="mainContent" style={{ marginTop: 30 }}>

          <Promotional />
          <Movies />
          {mainContent}
        </div>

        <div className="footerContent">{footerContent}</div>
      </div>
    </div>
  );
};

export default BaseMain;
