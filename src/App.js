import './App.css';
import MainContextprovider from './contex/MainContext'
import Appbar from './components/Menus/Appbar/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    
    <MainContextprovider>
      <div className="App">
      <Appbar/>
      </div>
    </MainContextprovider>
    
  );
}

export default App;
