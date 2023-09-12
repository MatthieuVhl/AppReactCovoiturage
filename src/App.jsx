import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}>CoCoVoit</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/carride/add`}>Créer ton trajet</NavLink>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              <div className="btn-group">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row my-3">
          <div >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;