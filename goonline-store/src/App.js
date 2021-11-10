import './App.css';
import LoginPage from './components/LoginPage';
import {Product} from './components/Product';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Store } from './components/Store';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LoginPage/>}/>
      <Route path ="/store" element={<Store/>}/>
      <Route path ="/store/:id" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
