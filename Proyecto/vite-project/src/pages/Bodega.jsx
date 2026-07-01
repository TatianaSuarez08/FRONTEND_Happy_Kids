import { Link } from "react-router-dom";
import Footer from "../componentes/footer";
import "./Bodega.css";

function Bodega() {
  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center text-success fw-bold mb-5">
          Panel de Bodega
        </h1>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>📦 Inventario</h3>
              <p>Consultar los productos disponibles en bodega.</p>

              <Link to="/buscar-producto" className="btn btn-success">
                Ver Inventario
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>📥 Entrada de Productos</h3>
              <p>Registrar el ingreso de nuevos productos.</p>

              <Link to="/proveedor" className="btn btn-primary">
                Registrar Entrada
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>📤 Salida de Productos</h3>
              <p>Actualizar la salida de productos del inventario.</p>

              <Link to="/vercatalogo" className="btn btn-warning">
                Registrar Salida
              </Link>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Bodega;