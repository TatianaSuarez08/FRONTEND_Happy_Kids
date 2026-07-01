import { useState, useEffect } from "react";
import Footer from "../componentes/footer";

function Proveedor() {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [indiceEditar, setIndiceEditar] = useState(null);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const datos =
      JSON.parse(localStorage.getItem("proveedores")) || [];

    setProveedores(datos);
  }, []);

  const guardarProveedor = () => {

    const nuevoProveedor = {
      nombre,
      telefono
    };

    const nuevosProveedores = [
      ...proveedores,
      nuevoProveedor
    ];

    setProveedores(nuevosProveedores);

    localStorage.setItem(
      "proveedores",
      JSON.stringify(nuevosProveedores)
    );

    setNombre("");
    setTelefono("");

    alert("✅ Proveedor registrado");
  };

  const cargarProveedor = (index) => {

    setIndiceEditar(index);

    setNombre(proveedores[index].nombre);
    setTelefono(proveedores[index].telefono);
  };

  const actualizarProveedor = () => {

    const nuevosProveedores = [...proveedores];

    nuevosProveedores[indiceEditar] = {
      nombre,
      telefono
    };

    setProveedores(nuevosProveedores);

    localStorage.setItem(
      "proveedores",
      JSON.stringify(nuevosProveedores)
    );

    setIndiceEditar(null);
    setNombre("");
    setTelefono("");

    alert("✅ Proveedor actualizado");
  };

  return (
    <>

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Gestión de Proveedores
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        {indiceEditar === null ? (
          <button
            className="btn btn-success mb-4"
            onClick={guardarProveedor}
          >
            Registrar Proveedor
          </button>
        ) : (
          <button
            className="btn btn-warning mb-4"
            onClick={actualizarProveedor}
          >
            Actualizar Proveedor
          </button>
        )}

        <h3>Proveedores Registrados</h3>

        {proveedores.map((proveedor, index) => (
          <div
            key={index}
            className="card mb-3"
          >
            <div className="card-body">

              <h5>{proveedor.nombre}</h5>

              <p>
                Teléfono: {proveedor.telefono}
              </p>

              <button
                className="btn btn-primary"
                onClick={() => cargarProveedor(index)}
              >
                Editar
              </button>

            </div>
          </div>
        ))}

      </div>

      <Footer />
    </>
  );
}

export default Proveedor;