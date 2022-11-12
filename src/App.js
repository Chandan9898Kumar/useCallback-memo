import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Parents from './UseCallBack/Parent';
function App() {
  return (
    <div className="App">
    <label>My React App</label>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/useCallback' element={<Parents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
