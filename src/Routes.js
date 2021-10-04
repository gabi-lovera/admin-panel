import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Graficos from "./components/Graficos";
import InicioSesion from "./components/InicioSesion";
import Usuarios from "./components/Usuarios";
import Configuracion from "./components/Configuracion";
import Estadisticas from "./components/Estadisticas";

export default function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Estadisticas />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
        <Route path="/configuracion">
          <Configuracion />
        </Route>
        <Route path="/graficos">
          <Graficos />
        </Route>
        <Route path="/sesion">
          <InicioSesion />
        </Route>
      </Switch>
    </Router>
  );
}
