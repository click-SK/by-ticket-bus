import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/mainPage/HomePage';
import { useTheme } from './hooks/use-thems';

function App() {
  const {them, setTheme} = useTheme()
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
