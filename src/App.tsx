import MainRoute from './AllRoutes/MainRoute';
import {Navbar} from './AllRoutes/Navbar';
import './App.css';

function App() {

  return (
    <div  className="App -mt-2 -mb-5">
      <Navbar/>
      <MainRoute/>
    </div>
  );
}

export default App;
