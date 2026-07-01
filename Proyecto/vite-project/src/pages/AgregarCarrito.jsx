import { useState, useEffect } from "react";
import Footer from "../componentes/footer";
import "./AgregarCarrito.css";

function AgregarCarrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const productos =
      JSON.parse(localStorage.getItem("carrito")) || [];

    setCarrito(productos);
  }, []);

  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito];

    nuevoCarrito.splice(index, 1);

    setCarrito(nuevoCarrito);

    localStorage.setItem(
      "carrito",
      JSON.stringify(nuevoCarrito)
    );
  };

  const confirmarPedido = () => {
    alert("✅ Pedido confirmado correctamente");

    localStorage.removeItem("carrito");

    setCarrito([]);
  };

  return (
    <>

      <div className="container mt-5 carrito-container">
       <h1 className="text-center mb-4 titulo-carrito">
          🛒 Carrito de Compras
        </h1>

        {carrito.length === 0 ? (
          <div className="alert alert-info text-center">
            No hay productos en el carrito.
          </div>
        ) : (
          <>
            {carrito.map((producto, index) => (
              <div
                className="card mb-3 shadow"
                key={index}
              >
                <div className="card-body">
                  <h5>{producto.nombre}</h5>

                  <p>
                    Precio: ${producto.precio}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      eliminarProducto(index)
                    }
                  >
                    ❌ Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div className="text-center mt-4">
              <button
                className="btn btn-success btn-lg"
                onClick={confirmarPedido}
              >
                ✅ Confirmar Pedido
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default AgregarCarrito;