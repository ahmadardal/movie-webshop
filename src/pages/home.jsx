import { useDispatch, useSelector } from "react-redux";
import BaseMain from "../components/basecomponents/basemain";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Button from "../components/reusableComponents/button";
import { actions } from "../state/reducers/counterReducer.js";
import ShoppingCartContainer from "../components/shoppingCart/shoppingCartContainer";

const Home = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(actions.increase());
  const decrease = () => dispatch(actions.decrease());

  function btnPress() {
    decrease();
  }

  return (
    <BaseMain
      headerContent={
        <div id="headerContentContainer">
          <h1 id="pageTitle">Välkommen till Filmcentralen</h1>
        </div>
      }
      mainContent={
        <div>
          <h1>{value}</h1>
          <Button btnText={"Hello"} handleClick={btnPress} />
          <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" />
          <FeedbackForm />
          <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" />
        </div>
      }
    />
  );
};

export default Home;
