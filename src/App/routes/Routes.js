import Home from "../paginas/home/Home";
import Desarrollo from "../paginas/desarrollo/Desarrollo";
import { Routes, Route } from "react-router-dom";

export function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/desarrollo" element={<Desarrollo />}></Route>
      </Routes>
    </>
  );
}
