import logo from './logo.svg';
import './Navigation/Navigation.module.css';
import Navigation from './Navigation/Navigation';
import Player from './PlayersFootball/Players';
import './App.css'
import Footer from './Footer/Footer';
import Main from './Main';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import Detail from './Detail'


import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Player/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  )
}




export default App;
