import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Recuperarpass from "./pages/Recuperarpass";

function InicioSesion() {
  const correoRef = useRef(null);
  const contraseñaRef = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const cancelar = () => navigate("/Registro");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const correo = correoRef.current.value.trim();
    const contraseña = contraseñaRef.current.value;

    if (!correo) return setError("Ingresa tu correo electrónico.");
    if (!contraseña) return setError("Ingresa tu contraseña.");

    setLoading(true);
    try {
      // TODO: reemplaza con tu llamada real a la API / Firebase / etc.
      await new Promise((r) => setTimeout(r, 1000));
      navigate("/");
    } catch {
      setError("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">🧸</div>
          <h1>HappyKids</h1>
          <p>Inicia sesión en tu cuenta</p>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              ref={correoRef}
              name="correo"
              type="email"
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="contraseña">Contraseña</label>
            <div className="login-pass-wrap">
              <input
                id="contraseña"
                ref={contraseñaRef}
                name="contraseña"
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="login-toggle-pass"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPass ? "👁" : "�"}
              </button>
            </div>
          </div>

          <div className="login-forgot">
            <Link to="/RecuperarPass">¿Olvidó su contraseña?</Link>
          </div>

          <div className="botones">
            <button type="submit" className="btn-ingresar" disabled={loading}>
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
            <button type="button" className="btn-registro" onClick={cancelar}>
              Regresar a Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;