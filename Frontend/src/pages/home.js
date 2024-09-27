import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="">
        <div id="carouselExample" style={{backgroundImage:'radial-gradient(circle,transparent -10%, rgb(232, 42, 48))'}} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ objectFit: 'contain' }} src={"https://as1.ftcdn.net/v2/jpg/07/79/61/38/1000_F_779613858_4AteoYrD37QQiLpyBV1wqojpxLcb6RNy.jpg"} height="500" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img style={{ objectFit: 'contain' }} src={"https://as1.ftcdn.net/v2/jpg/02/09/77/52/1000_F_209775206_lKDQpFottlBFixQRFudJYCOvI34RsanU.jpg"} height="500" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img style={{ objectFit: 'contain' }} src={"https://as1.ftcdn.net/v2/jpg/07/58/67/22/1000_F_758672213_nqJfHJIERGhrT82nKRS4P9nyodpf0XOY.jpg"} height="500" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link className="mt-3 btn btn-primary" to='/southindian'>South Indian</Link>
          </div>
          <div className="col-3">
            <Link className="mt-3 btn btn-primary" to='/Gujrati'>Gujrati</Link>
          </div>
          <div className="col-3">
            <Link className="mt-3 btn btn-primary" to='/punjabi'>Punjabi</Link>
          </div>
          <div className="col-3">
            <Link className="mt-3 btn btn-primary" to='/chinese'>Chinese</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;