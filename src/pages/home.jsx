import BaseMain from '../components/basecomponents/basemain';
import FeedbackCard from '../components/FeedbackCard';
import FeedbackForm from '../components/FeedbackForm';
const Home = () => {
  return (
    <BaseMain
      headerContent={
        <div id='headerContentContainer'>
          <h1 id="pageTitle">Välkommen till Filmcentralen</h1>
        </div>}
      mainContent={
        <div>
          <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18"/>
          <FeedbackForm/>
        </div>
      }
    />
  );
};

export default Home;
