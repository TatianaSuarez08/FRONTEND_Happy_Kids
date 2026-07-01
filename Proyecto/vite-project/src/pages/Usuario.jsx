import { useState, useEffect } from "react";
import Nav from "../componentes/Nav";
import Footer from "../componentes/footer";

function Usuario() {

  const [usuarios, setUsuarios] = useState([]);
  const [indiceEditar, setIndiceEditar] = useState(null);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    const datos =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    setUsuarios(datos);
  }, []);

  const cargarUsuario = (index) => {
    setIndiceEditar(index);
    setNombre(usuarios[index].nombre);
    setCorreo(usuarios[index].correo);
  };

  const actualizarUsuario = () => {

    const nuevosUsuarios = [...usuarios];

    nuevosUsuarios[indiceEditar] = {
      nombre,
      correo
    };

    setUsuarios(nuevosUsuarios);

    localStorage.setItem(
      "usuarios",
      JSON.stringify(nuevosUsuarios)
    );

    setIndiceEditar(null);
    setNombre("");
    setCorreo("");

    alert("✅ Usuario actualizado");
  };

  const eliminarUsuario = (index) => {

    const nuevosUsuarios = [...usuarios];

    nuevosUsuarios.splice(index, 1);

    setUsuarios(nuevosUsuarios);

    localStorage.setItem(
      "usuarios",
      JSON.stringify(nuevosUsuarios)
    );

    alert("🗑️ Usuario eliminado");
  };

  return (
    <>
      <Nav />

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Gestión de Usuarios
        </h2>

        {indiceEditar !== null && (
          <div className="card p-3 mb-4">

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <button
              className="btn btn-warning"
              onClick={actualizarUsuario}
            >
              Actualizar Usuario
            </button>

          </div>
        )}

        <h3>Usuarios Registrados</h3>

        {usuarios.length === 0 ? (
          <div className="alert alert-info">
            No hay usuarios registrados.
          </div>
        ) : (
          usuarios.map((usuario, index) => (
            <div
              key={index}
              className="card mb-3"
            >
              <div className="card-body">

                <h5>{usuario.nombre}</h5>

                <p>
                  Correo: {usuario.correo}
                </p>

                <button
                  className="btn btn-primary me-2"
                  onClick={() => cargarUsuario(index)}
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => eliminarUsuario(index)}
                >
                  🗑️ Eliminar
                </button>

              </div>
            </div>
          ))
        )}

      </div>

      <Footer />
    </>
  );
}

export default Usuario;