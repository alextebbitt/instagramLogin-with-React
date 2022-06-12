import './App.css';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import Download from './assets/180ae7a0bcf7.png'
import Googleplay from './assets/e9cd846dc748.png';
function App() {
  return (
    <div className="App">
    <Header />
      <Home Download={Download} Googleplay={Googleplay}/> 
    </div>
  );
}

export default App;
