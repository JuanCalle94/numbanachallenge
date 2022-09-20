import React from "react";
import { Formik } from "formik";

function Carro() {
  return (
    <>
    <div className="container carro__container">
    <h2 className="carro__tittle">Carrito de compras</h2>
      <div className="carro">
        <div className="carro__data">
          <h3>Datos del pedido</h3>
          <Formik
            initialValues={{ nombre: "", telefono: "", email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.nombre) {
                errors.nombre = "Debes ingresar un nombre";
              } else if (
                !/^[A-Za-z]{4}/.test(values.nombre)
              ) {
                errors.nombre = "Debes ingresar un nombre";
              }
              if (!values.telefono) {
                errors.telefono = "Debes ingresar un numero de telefono";
              } else if (
                !/3[0-9]{9}/.test(values.telefono)
              ) {
                errors.telefono = "Debes ingresar un numero de telefono valido";
              }
              if (!values.email) {
                errors.email = "Debes ingresar un correo electronico";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Debes ingresar un correo electronico valido";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                values.nombre= "";
                values.telefono= "";
                values.email= "";
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="carro__data__form" onSubmit={handleSubmit}>
                <div className="carro__data__div">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                  />
                  <p className="error">{errors.nombre && touched.nombre && errors.nombre}</p>
                </div>
                <div className="carro__data__div">
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="text"
                    name="telefono"
                    id="telefono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telefono}
                  />
                  <p className="error">{errors.telefono && touched.telefono && errors.telefono}</p>
                </div>
                <div className="carro__data__div">
                  <label htmlFor="email">Correo electronico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className="error">{errors.email && touched.email && errors.email}</p>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="carro__order">
          <h3>Mi orden</h3>
        </div>
      </div>
    </div>

    </>
  );
}

export default Carro;
