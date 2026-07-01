import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import InicioSesion from "./pages/InicioSesion";
import RecuperarPass from "./pages/RecuperarPass";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Nav from "./componentes/Nav";

import DetalleProducto from "./pages/Detalleproducto";
import ActualizarPerfil from "./pages/ActualizarPerfil";
import Favoritos from "./pages/Favoritos";
import Catalogo from "./pages/Catalogo";

import VerCatalogo from "./pages/VerCatalogo";
import BermudaCapibara from "./pages/BermudaCapibara";
import BermudaLiloYStitch from "./pages/BermudaLiloYStitch";
import BordadoCanguro from "./pages/BordadoCanguro";
import ConjuntoPlaya from "./pages/ConjuntoPlaya";
import ConjuntoPolo from "./pages/ConjuntoPolo";
import Capota from "./pages/Capota";
import SudaderaSnoopy from "./pages/SudaderaSnoopy";
import SudaderaSpiderman from "./pages/SudaderaSpiderman";
import BuscarProducto from "./pages/BuscarProducto";
import AgregarCarrito from "./pages/AgregarCarrito";
import Proveedor from "./pages/Proveedor";
import Usuario from "./pages/Usuario";
import Administracion from "./pages/Administracion";
import Bodega from "./pages/Bodega";

function Layout() {
  const location = useLocation();

  const sinNav = ["/", "/Registro", "/RecuperarPass"];
  const mostrarNav = !sinNav.includes(location.pathname);

  return (
    <>
      {mostrarNav && <Nav />}

      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/RecuperarPass" element={<RecuperarPass />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/ActualizarPerfil" element={<ActualizarPerfil />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/catalogo" element={<Catalogo />} />

        <Route path="/vercatalogo" element={<VerCatalogo />} />
        <Route path="/capibara" element={<BermudaCapibara />} />
        <Route path="/lilo" element={<BermudaLiloYStitch />} />
        <Route path="/canguro" element={<BordadoCanguro />} />
        <Route path="/playa" element={<ConjuntoPlaya />} />
        <Route path="/polo" element={<ConjuntoPolo />} />
        <Route path="/capota" element={<Capota />} />
        <Route path="/snoopy" element={<SudaderaSnoopy />} />
        <Route path="/spiderman" element={<SudaderaSpiderman />} />
        <Route path="/buscar-producto" element={<BuscarProducto />} />
        <Route path="/agregarcarrito" element={<AgregarCarrito />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/bodega" element={<Bodega />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;