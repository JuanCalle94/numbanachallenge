import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Productos from "../pages/Productos";
import Carro from "../pages/Carro";
import NotFound from "../pages/NotFound";
import { ProductProvider } from "../context/productContext";
import "../styles/app.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductProvider>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
