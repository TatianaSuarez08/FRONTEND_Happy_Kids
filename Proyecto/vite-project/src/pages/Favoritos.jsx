import { useNavigate } from "react-router-dom";
import { useFavoritos } from "../context/FavoritosContext";

function Favoritos() {
  const { favoritos, quitarFavorito } = useFavoritos();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="home-section" style={{ paddingTop: "2rem" }}>
        <h2 className="home-section-title">Mis favoritos</h2>
        <p className="home-section-sub">{favoritos.length} producto(s) guardado(s)</p>

        {favoritos.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", color: "#888" }}>
            <span style={{ fontSize: "48px", display: "block", marginBottom: "1rem" }}>♡</span>
            <p>No tienes productos en favoritos.</p>
            <button className="btn-ingresar" style={{ width: "fit-content", padding: "0 2rem", marginTop: "1rem" }} onClick={() => navigate("/Home")}>
              Ver productos
            </button>
          </div>
        ) : (
          <div className="home-productos">
            {favoritos.map((p) => (
              <div key={p.id} className="home-producto-card">
                <div className="home-producto-img">
                  <img src={p.img} alt={p.nombre} />
                </div>
                <div className="home-producto-info">
                  <span className="home-producto-nombre">{p.nombre}</span>
                  <span className="home-producto-precio">{p.precio}</span>
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button className="home-producto-btn" onClick={() => navigate(`/producto/${p.id}`)}>
                      Ver producto
                    </button>
                    <button onClick={() => quitarFavorito(p.id)} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "6px 10px", background: "none", color: "#888", fontSize: "13px", cursor: "pointer" }}>
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Favoritos;