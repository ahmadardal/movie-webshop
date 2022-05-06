
import BaseMain from '../components/basecomponents/basemain';
import Feedback from '../components/feedback';
import ShoppingCartContainer from '../components/shoppingCart/shoppingCartContainer';


const Home = () => {


  return (

    <BaseMain
      headerContent={

        <div className='headerWrapper'>
          <h1 id="pageTitle">Välkommen till Filmcentralen</h1>
        </div> }
      mainContent={
        
        <div>
           <Feedback feedback="Hej" author="Ahmad Ardal" age="18" />
          

        </div>
      }
    />
  );
};

export default Home;
