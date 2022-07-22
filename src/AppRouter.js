import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}>
          <Route path="/contact" element={<h1>Contacto</h1>} />
          <Route path="/about" element={<h1>Acerca de</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
