import { useState } from "react";
import Nav from "../componentes/Nav";
import Footer from "../componentes/footer";

function BuscarProducto() {
  const [busqueda, setBusqueda] = useState("");

  const productos = [
    "Bermuda Capibara",
    "Bermuda Lilo y Stitch",
    "Bordada Canguro",
    "Conjunto de Playa",
    "Conjunto Polo",
    "Repujuada Capota",
    "Sudadera Snoopy",
    "Sudadera Spiderman",
  ];

  const resultados = productos.filter((producto) =>
    producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Buscar Producto</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Escribe el nombre del producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="mt-4">
          {resultados.length > 0 ? (
            resultados.map((producto, index) => (
              <div className="card mb-3" key={index}>
                <div className="card-body">
                  <h5>{producto}</h5>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-3">
              No se encontró ningún producto.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BuscarProducto;