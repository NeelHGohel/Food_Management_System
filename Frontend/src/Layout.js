import { Link, Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Just Order</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to='/home' activeClassName="active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/southindian' activeClassName="active">South Indian</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/gujrati' activeClassName="active">Gujrati</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/punjabi' activeClassName="active">Punjabi</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/chinese' activeClassName="active">Chinese</NavLink>
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
