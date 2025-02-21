import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
import Productos from "./pages/Productos";
import PreciosEspeciales from "./pages/PreciosEspeciales";
import GestionPrecios from "./pages/GestionPrecios";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/precios-especiales" element={<PreciosEspeciales />} />
        <Route path="/gestion-precios" element={<GestionPrecios />} />
      </Routes>
    </Router>
  )
}

export default App
