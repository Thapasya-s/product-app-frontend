import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './components.jsx/ViewProduct';
import AddPro from './components.jsx/AddPro';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPro/>}/>
        
        <Route path='/view' element={<ViewProduct/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
