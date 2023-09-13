import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from './component/logoTuktuk';
import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './routes/Auth/AuthSlice';

function App() {

  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  const onClikHandler = () => {
    dispatch(logout());
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">


            <Link className="navbar-brand link" to={`/`}>
              <Logo />
              <div className='title'>tuKtuKGo</div></Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {
                  token !== "" ?
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/carride/add`}>Créer ton trajet</NavLink>
                    </li>
                    :
                    <></>
                }

                <li>
                  <NavLink className="nav-link" to={`/carride`}>Trajets</NavLink>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              {
                token === "" ?
                  <div className="btn-group">
                    <Link to="/login" className="btn btn-primary rounded mx-2">Login</Link>
                    <Link to="/register" className="btn btn-primary rounded">Register</Link>
                  </div>
                  :
                  <div className="btn-group">
                    <Link to="/profil" className="btn btn-primary rounded mx-2">Profil</Link>
                    <button onClick={onClikHandler} className="btn btn-primary rounded">LogOut</button>
                  </div>
              }

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