import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Contacto,
  Landing,
  Nosotros,
  NotFound,
  Proyectos,
  Servicios,
} from "../pages/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
