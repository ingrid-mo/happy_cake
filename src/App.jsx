import Navegation from "./Componets/Navegations"
import { Route, Routes } from "react-router-dom";
import HomePage from "./view/HomePage";
import NotFound from "./Componets/NotFound";
import Contact from "./view/Contact";

import "./app.css";

const App = () => {
  return (
    <div>
      <Navegation/>
      <Routes>
      <Route path="/" element ={<HomePage/>} />
      <Route path="/contact" element ={<Contact/>} />
      <Route path="*" element= {<NotFound/>} />

      </Routes>
    </div>
  )
}

export default App
