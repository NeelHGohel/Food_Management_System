import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/southindian'>South Indian</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Gujrati'>Gujrati</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/punjabi'>Punjabi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/chinese'>Chinese</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <footer className="bg-dark text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
export default Layout;
