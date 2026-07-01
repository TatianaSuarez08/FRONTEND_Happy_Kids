import { useState } from "react";
import Footer from "../componentes/footer";
import { useNavigate } from "react-router-dom";
import "./SudaderaSpiderman.css";

function SudaderaSpiderman() {

  const [cantidad, setCantidad] = useState(1);
const navigate = useNavigate(); // ✅ Aquí va
  const agregarAlCarrito = () => {

    let precioFinal = 65000;

    if (cantidad >= 6) {
      precioFinal = 45000;
    }

    const producto = {
      nombre: "Sudadera Spiderman",
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
          Sudadera Spiderman
        </h2>

        <div className="row g-4">

          <div className="col-md-4 mb-4">
            <img
              src="/Imagenes de ropa/Sudadera-Spiderman.jpeg"
              className="img-fluid rounded"
              alt="Diseño Spiderman 1"
            />
            <h5 className="text-center mt-2">
              Diseño Spiderman 1
            </h5>

            <p className="text-center text-primary fw-bold">
              Unidad: $65.000
            </p>

            <p className="text-center text-success fw-bold">
              Mayor: $45.000
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="/Imagenes de ropa/Sudadera-Spiderman (2).jpeg"
              className="img-fluid rounded"
              alt="Diseño Spiderman 2"
            />
            <h5 className="text-center mt-2">
              Diseño Spiderman 2
            </h5>

            <p className="text-center text-primary fw-bold">
              Unidad: $65.000
            </p>

            <p className="text-center text-success fw-bold">
              Mayor: $45.000
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="/Imagenes de ropa/Sudadera-Spiderman (3).jpeg"
              className="img-fluid rounded"
              alt="Diseño Spiderman 3"
            />
            <h5 className="text-center mt-2">
              Diseño Spiderman 3
            </h5>

            <p className="text-center text-primary fw-bold">
              Unidad: $65.000
            </p>

            <p className="text-center text-success fw-bold">
              Mayor: $45.000
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="/Imagenes de ropa/Sudadera-Spiderman (4).jpeg"
              className="img-fluid rounded"
              alt="Diseño Spiderman 4"
            />
            <h5 className="text-center mt-2">
              Diseño Spiderman 4
            </h5>

            <p className="text-center text-primary fw-bold">
              Unidad: $65.000
            </p>

            <p className="text-center text-success fw-bold">
              Mayor: $45.000
            </p>
          </div>

        </div>

        <div className="text-center mt-4">

          <h4 className="text-primary">
            Precio por unidad: $65.000
          </h4>

          <h4 className="text-success">
            Precio al por mayor: $45.000
          </h4>

          <p>
            Tallas disponibles:  2, 4, 6, 8, 10, 12, 14, 16, 18
          </p>

          <p>
            El precio al por mayor aplica desde 6 unidades.
          </p>

          <div className="mt-3">
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

export default SudaderaSpiderman;