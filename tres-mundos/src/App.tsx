import { Routes, Route } from "react-router-dom";
import Mundos from "./componentes/Mundos";
import Nav from "./componentes/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Mundos />} />
      </Routes>
    </>

  );
}