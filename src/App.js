import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Parents from './UseCallBack/Parent';
import MemoComponent from './Memo/MemoComponent'
function App() {
  return (
    <div className="App">
    <label>My React App</label>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/useCallback' element={<Parents />} />
          <Route exact path='/memoCom' element={<MemoComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
