import { Link } from "react-router-dom";
import Footer from "../componentes/footer";
import "./Administracion.css";

function Administracion() {
  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center text-primary fw-bold mb-5">
          Panel de Administración
        </h1>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>👤 Usuarios</h3>
              <p>Registrar, consultar, editar y eliminar usuarios.</p>

              <Link to="/usuarios" className="btn btn-primary">
                Ir a Usuarios
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>🏢 Proveedores</h3>
              <p>Administrar los proveedores del sistema.</p>

              <Link to="/proveedor" className="btn btn-success">
                Ir a Proveedores
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>📦 Productos</h3>
              <p>Consultar el catálogo de productos.</p>

              <Link to="/vercatalogo" className="btn btn-warning">
                Ver Catálogo
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>📊 Inventario</h3>
              <p>Control del inventario disponible.</p>

              <Link to="/buscar-producto" className="btn btn-info">
                Ver Inventario
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <h3>🛒 Pedidos</h3>
              <p>Consultar los pedidos realizados.</p>

              <Link to="/agregarcarrito" className="btn btn-danger">
                Ver Pedidos
              </Link>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Administracion;