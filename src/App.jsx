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
    < >
      <header>
        <nav className="navbar navbar-expand-lg  nav" data-bs-theme="dark">
          <div className="container-fluid">


            <Link className="navbar-brand link" to={`/`}>
              <Logo />
              <div className='title'>tuKtuKGo</div></Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {
                  token !== "" ?
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/carride/add`}><i class="bi bi-plus-circle-fill"></i> Créer ton trajet</NavLink>
                    </li>
                    :
                    <></>
                }

                <li>
                  <NavLink className="nav-link" to={`/carride`}><i class="bi bi-car-front-fill"></i> Trajets</NavLink>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              {
                token === "" ?
                  <div className="btn-group">
                    <Link to="/login" className="btn rounded mx-2 btn1">Login</Link>
                    <Link to="/register" className="btn rounded btn2">Register</Link>
                  </div>
                  :
                  <div className="btn-group">
                    <Link to="/profil" className="btn rounded mx-2 btn3"><i class="bi bi-person-fill"></i> Profil</Link>
                    <button onClick={onClikHandler} className="btn rounded btn2"><i class="bi bi-power"></i> LogOut</button>
                  </div>
              }

            </div>
          </div>
        </nav>
      </header>
      <div className="container-add">
        <div className="row">
            <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;