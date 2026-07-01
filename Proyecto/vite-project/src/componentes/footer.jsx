import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        marginTop: "50px",
        borderTop: "1px solid #2e2e2e",
      }}
    >
      <div className="container py-4">
        <div className="row">

          {/* Información */}
          <div className="col-md-4 mb-3">
            <h4>
              Happy Kids <span style={{ color: "#ff8c42" }}>.</span>
            </h4>
            <p style={{ color: "#ccc" }}>
              Moda infantil con estilo, comodidad y calidad para cada ocasión.
            </p>
          </div>

          {/* Enlaces */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/Home"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/catalogo"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Catálogo
                </Link>
              </li>

              <li>
                <Link
                  to="/Favoritos"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Favoritos
                </Link>
              </li>

              <li>
                <Link
                  to="/agregarcarrito"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p style={{ color: "#ccc" }}>📧 contacto@happykids.com</p>
            <p style={{ color: "#ccc" }}>📱 +57 300 123 4567</p>
            <p style={{ color: "#ccc" }}>📍 Colombia</p>
          </div>

        </div>

        <hr style={{ borderColor: "#2e2e2e" }} />

        <div className="text-center">
          <small style={{ color: "#999" }}>
            © 2026 Happy Kids. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;