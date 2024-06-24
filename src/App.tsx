import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from './components/footer/Footer'
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategoria"
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import { ToastContainer } from "react-toastify"


function App() {
return (
    <>
    <ToastContainer />
        <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormularioProduto />} />
            <Route path="/editarproduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} /> */}
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>
)
}

export default App