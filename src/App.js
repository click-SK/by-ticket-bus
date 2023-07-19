import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/mainPage/HomePage';
import { useTheme } from './hooks/use-thems';

function App() {
  const {them, setTheme} = useTheme()
  return (
    <div 
    className="App">
      {/* <img className='img_baner_absolute' src="./image/bus-main.svg" alt="" /> */}
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
