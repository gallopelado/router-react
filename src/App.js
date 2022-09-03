import {
  BrowserRouter as Router
  , Switch
  , Route
  , Link
  , NavLink
} from "react-router-dom";
import { Civilizacion } from "./components/Civilizacion";
import { Civilizaciones } from "./components/Civilizaciones";
import { Contacto } from "./components/Contacto";
import { Inicio } from "./components/Inicio";
import { Nosotros } from "./components/Nosotros";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <NavLink to="/civilizaciones" className="btn btn-dark" activeClassName="active">
            Civilizaciones
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/civilizaciones/:id">
            <Civilizacion />
          </Route>
          <Route path="/civilizaciones">
            <Civilizaciones />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
