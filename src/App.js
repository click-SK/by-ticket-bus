import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/mainPage/HomePage';
import Footer from './components/footer/Footer';
import LogInComp from './components/authorization/LogInComp';
import Profile from './components/profile/Profile';
import { useTheme } from './hooks/use-thems';

function App() {
  const {them, setTheme} = useTheme()
  return (
    <div 
    className="App">
      {/* <img className='img_baner_absolute' src="./image/bus-main.svg" alt="" /> */}
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogInComp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
