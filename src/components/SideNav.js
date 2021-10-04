import { Col, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaChartPie } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

import swal from "sweetalert2";

export default function SideNav() {
  const history = useHistory();

  const logout = () => {
    swal
      .fire({
        title: "Desea salir ?",
        text: "Se cerrará sesión como administrador",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Salir",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          history.push("/sesion");
        }
      });
  };
  return (
    <Col className="col-sidenav" xs={12} md={3}>
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light p-3">
          <strong>
            <Image src="/images/joe.jpg" /> <span>Admin</span>
          </strong>{" "}
        </div>
        <div className="list-group list-group-flush">
          <div className="sidebar-heading border-bottom bg-light p-3">
            <strong>Navegación</strong>
          </div>
          <div className="sidebar-heading border-bottom bg-light p-3">
            Estadísticas
          </div>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/"
          >
            <BsGraphUp className="icon" /> Estadisticas
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/graficos"
          >
            <FaChartPie className="icon" /> Gráficos
          </Link>
          <div className="sidebar-heading border-bottom bg-light p-3">
            Tablas
          </div>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/usuarios"
          >
            <FaUserAlt className="icon" /> Usuarios
          </Link>
          <div className="sidebar-heading border-bottom bg-light p-3">
            Otros
          </div>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/configuracion"
            disabled
          >
            <MdSettings className="icon" /> Configuración
          </Link>
          <div className="list-group-item p-3 blank-space-snav"></div>
          <div
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/estadisticas"
          >
            <Button className="btnlog" variant="primary" onClick={logout}>
              <GoSignOut /> Salir
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}
