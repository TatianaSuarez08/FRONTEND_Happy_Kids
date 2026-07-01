import Footer from "../componentes/footer";
import { Link } from "react-router-dom";

function VerCatalogo() {
  return (
    <>

      <div className="container mt-5">
        <h1 className="text-center mb-5">Catálogo Happy Kids</h1>

        <div className="row g-4">

          {/* Bermuda Capibara */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Bermuda-Capibara-Niña.jpeg"
                className="card-img-top"
                alt="Bermuda Capibara"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Bermuda Capibara</h5>
                <p>Disponible en 5 colores.</p>
                <Link to="/capibara" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Bermuda Lilo y Stitch */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Bermuda-Lilo-Y-Stitch.jpeg"
                className="card-img-top"
                alt="Bermuda Lilo y Stitch"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Bermuda Lilo y Stitch</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/lilo" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Bordado Canguro */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Bordada-Canguro.jpeg"
                className="card-img-top"
                alt="Bordado Canguro"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Bordado Canguro</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/canguro" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Conjunto Playa */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Conjunto-De-Playa-Niña.jpeg"
                className="card-img-top"
                alt="Conjunto Playa"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Conjunto Playa</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/playa" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Conjunto Polo */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Conjunto-Polo.jpeg"
                className="card-img-top"
                alt="Conjunto Polo"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Conjunto Polo</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/polo" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Repujuada Capota */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Repujuada-Capota.jpeg"
                className="card-img-top"
                alt="Repujuada Capota"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Repujuada Capota</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/capota" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Sudadera Snoopy */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Sudadera-Snoopy-Niña.jpeg"
                className="card-img-top"
                alt="Sudadera Snoopy"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Sudadera Snoopy</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/snoopy" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

          {/* Sudadera Spiderman */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src="/Imagenes de ropa/Sudadera-Spiderman.jpeg"
                className="card-img-top"
                alt="Sudadera Spiderman"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>Sudadera Spiderman</h5>
                <p>Disponible en varios colores.</p>
                <Link to="/spiderman" className="btn btn-primary mt-auto">
                  Ver producto
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default VerCatalogo;