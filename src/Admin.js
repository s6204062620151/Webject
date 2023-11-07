import style from "./Admin.module.css";
import Adminbar from './Components/Adminbar';
import { Routes,Route } from "react-router-dom";

import Adminhome from './Components/Adminhome'
import Adminproductlists from './Components/Adminproductlists'
import Adminaddproduct from './Components/Adminaddproduct'
import Adminorderlists from './Components/Adminorderlists'


function App() {
  return (
    <div className={style.container}>
        <div className={style.navbar}><Adminbar/></div>
          <main>
            <Routes>
              <Route path="/" Component={Adminhome} />
              <Route path="/Adminaddproduct" Component={Adminaddproduct} />
              <Route path="/Adminproductlists" Component={Adminproductlists} />
              <Route path="/Adminorderlists" Component={Adminorderlists} />
            </Routes>
          </main>
    </div>
  );
}

export default App;