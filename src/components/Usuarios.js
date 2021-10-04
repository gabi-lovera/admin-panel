import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Axios from "axios";
import { FaEdit, FaTrash, FaAngleRight } from "react-icons/fa";
import SideNav from "./SideNav";
import MyPagination from "./Paginacion";
import swal from "sweetalert2";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currPage, setCurrPage] = React.useState(1);

  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
  };

  const actualizarUsuario = (usuario) => {
    swal
      .fire({
        title: "<strong>Actualizar <u>usuario</u></strong>",
        html:
          `<input id="swal-input1" class="swal2-input" value="${usuario.name.first}">` +
          `<input id="swal-input2" class="swal2-input" value="${usuario.name.last}">` +
          `<input id="swal-input3" class="swal2-input" value="${usuario.email}">` +
          `<input id="swal-input4" class="swal2-input" value="${usuario.location.country}">` +
          `<input id="swal-input5" class="swal2-input" value="${usuario.phone}">`,
        preConfirm: () => [
          document.querySelector("#swal-input1").value,
          document.querySelector("#swal-input2").value,
          document.querySelector("#swal-input3").value,
          document.querySelector("#swal-input4").value,
          document.querySelector("#swal-input5").value,
        ],
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Actualizar",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            icon: "success",
            title: "Usuario actualizado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const eliminarUsuario = () => {
    swal
      .fire({
        title: "Está seguro que desea eliminar este usuario?",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: `Confirmar`,
        cancelButtonText: `Cancelar`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            icon: "info",
            title: "No es posible",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(`https://randomuser.me/api/?results=10`).then((response) => {
      setUsuarios(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [currPage]);

  return (
    <Row>
      <SideNav />
      <Col className="col-panel" xs={12} md={9}>
        <div className="col-md-12">
          <h3 className="txt-tittle-admin">
            Tabla
            <FaAngleRight className="icon-pro" />
            usuarios
          </h3>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title ">Tabla de Usuarios</h4>
              <p className="card-categoryy">
                Contiene todos los usuarios registrados en la plataforma
              </p>
            </div>
            <div className="card-body">
              {isLoading ? (
                <div className="div-appear">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>Nombre y Apellido</th>
                          <th>Email</th>
                          <th>País</th>
                          <th>Género</th>
                          <th>Teléfono</th>
                          <th>Editar</th>
                          <th>Borrar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.map((user) => {
                          return (
                            <tr>
                              <td>{user.name.first}</td>
                              <td className=" text-danger">{user.email}</td>
                              <td>{user.location.country}</td>
                              <td>{user.gender}</td>
                              <td>{user.phone}</td>
                              <td className="text-center">
                                <FaEdit
                                  className="icon-delete"
                                  onClick={() => {
                                    actualizarUsuario(user);
                                  }}
                                />
                              </td>
                              <td className="text-center">
                                <FaTrash
                                  className="icon-edit"
                                  onClick={() => {
                                    eliminarUsuario();
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="div-pagination">
                    <MyPagination
                      totPages={20}
                      currentPage={currPage}
                      pageClicked={(e) => {
                        afterPageClicked(e);
                      }}
                    ></MyPagination>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
