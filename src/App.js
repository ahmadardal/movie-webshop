import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import FullMovie from './components/Fullmovie';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/movie/:id' element={<FullMovie />} />
        </Routes>
      </Router>
    </>


    // <div className="App">
    //   <header className="App-header">

    //     <p>WELCOME to Movie Shop Project</p>

    //   </header>
    // </div>
  );
}

export default App;
