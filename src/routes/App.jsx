import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Productos from "../pages/Productos";
import Carro from "../pages/Carro";
import NotFound from "../pages/NotFound";
import "../styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/carro" element={<Carro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
