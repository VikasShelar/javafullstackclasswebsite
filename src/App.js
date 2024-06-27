import "./App.css";
import { Header } from "./components/Header";
// import { Css } from './components/Css';
// import { Html } from './components/Html';
// import { Javascript } from './components/Javascript';
// import { B } from './components/B';

import { Routes,  Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
         
        </Routes>
        <Outlet/>
      </main>
      <footer className="footer">
        <b>@right belongs to JavaFullstackClass@2023</b>
      </footer>
    </div>
  );
}

export default App;
