// import './App.css';
import Adminbar from './Components/Adminbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Adminhome from './Components/Adminhome'
import Adminproductlists from './Components/Adminproductlists'
import Adminaddproduct from './Components/Adminaddproduct'
import Adminorderlists from './Components/Adminorderlists'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Adminbar/>
        <Routes>
          <Route path="/" element={<Adminhome/>} />
          <Route path="/Adminaddproduct" element={<Adminaddproduct/>} />
          <Route path="/Adminproductlists" element={<Adminproductlists/>} />
          <Route path="/Adminorderlists" element={<Adminorderlists/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;