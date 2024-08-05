import { Routes, Route } from "react-router-dom";
import { Inicial } from "./pages";
import { SobreNos } from "./pages";
import { LayoutPadrao } from "./Layouts";
import { Erro404 } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
};

export { Router };
