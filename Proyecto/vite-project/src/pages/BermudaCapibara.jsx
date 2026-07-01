import { useState } from "react";
import Footer from "../componentes/footer";
import { useNavigate } from "react-router-dom";
import "./BermudaCapibara.css";

function BermudaCapibara() {

  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate(); // ✅ Aquí va

  const agregarAlCarrito = () => {

    let precioFinal = 65000;

    if (cantidad >= 6) {
      precioFinal = 45000;
    }

    const producto = {
      nombre: "Bermuda Capibara",
      precio: precioFinal,
      cantidad: Number(cantidad)
    };

    const carrito =
      JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

    alert("✅ Producto agregado al carrito");

    navigate("/agregarcarrito"); // ✅ Y esto al final
  };
  
  return (
    <>

      <div className="container mt-5">

        <h2 className="text-center fw-bold text-primary mb-4">
          Bermuda Capibara
        </h2>

        <div className="row g-4">

          <div className="col-md-4 mb-4">
            <div className="card card-producto h-100 shadow">
              <img
                src="/Imagenes de ropa/Bermuda-Capibara-Niña.jpeg"
                className="card-img-top"
                alt="Diseño Capibara"
              />
              <div className="card-body text-center">
                <h5>🧸 Diseño Capibara</h5>

                <p className="text-primary fw-bold mb-1">
                  Unidad: $65.000
                </p>

                <p className="text-success fw-bold mb-1">
                  Mayor: $45.000
                </p>

                <small className="text-muted">
                  Tallas: 2, 4, 6, 8, 10, 12, 14, 16, 18
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card card-producto h-100 shadow">
              <img
                src="/Imagenes de ropa/Bermuda-Capibara-Niña (2).jpeg"
                className="card-img-top"
                alt="Diseño Capibara"
              />
              <div className="card-body text-center">
                <h5>🧸 Diseño Capibara</h5>

                <p className="text-primary fw-bold mb-1">
                  Unidad: $65.000
                </p>

                <p className="text-success fw-bold mb-1">
                  Mayor: $45.000
                </p>

                <small className="text-muted">
                  Tallas: 2, 4, 6, 8, 10, 12, 14, 16, 18
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card card-producto h-100 shadow">
              <img
                src="/Imagenes de ropa/Bermuda-Capibara-Niña (3).jpeg"
                className="card-img-top"
                alt="Diseño Capibara"
              />
              <div className="card-body text-center">
                <h5>🧸 Diseño Capibara</h5>

                <p className="text-primary fw-bold mb-1">
                  Unidad: $65.000
                </p>

                <p className="text-success fw-bold mb-1">
                  Mayor: $45.000
                </p>

                <small className="text-muted">
                   Tallas: 2, 4, 6, 8, 10, 12, 14, 16, 18
                </small>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-4 text-center">
          <label className="form-label fw-bold">
            Cantidad:
          </label>

          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="form-control w-25 mx-auto"
          />
        </div>

        <div className="text-center mt-4 mb-5">
          <button
            className="btn btn-success btn-lg"
            onClick={agregarAlCarrito}
          >
            🛒 Agregar al carrito
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default BermudaCapibara;