
import './App.css';
import Greeting from './component/greeting';
import NavBar from './component/NavBar';
function App() {
  return (
    <div className="App">
     <NavBar age='18' adresse='tunis' />
     <Greeting name='Arije' Lastname='Rajhi'/>
     <Greeting name='Ady' Lastname='Yahyaoui'/>
     <Greeting name='Sameh' Lastname='Mekni'/>
     
     

    </div>
  );
}

export default App;
