import React from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./styles.css"

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; // your form submit function which will invoke after successful validation

      const handleClose = () => {
        setFormVis(false);
      }
        
      return (
        <>
          <Modal show={formVis} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body>
                <label>Nombre</label>
                <input
                  {...register("nombre", {
                    required: true,
                    minLength: 2,
                  })}
                />
                {errors?.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe superar los 3 caracteres</p>
                )}
                {/* <label>Email</label>
                <input type='email' {...register("email", {minLength: 3, required: true})} />
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene que tener minimo 3 caracteres</p>
                )}
                <label>Repetir email</label>
                <input type='email' {...register("email", {minLength: 3, required: true})} />
                {errors?.email?.type === "minLength" && (
                  <p>El mail debe ser igual al anterior</p>
                )} */}
                <label>Email: </label>
            <input
          {...register("password", { required: "email is required!" })}
        />
        {errors.password && (
          <p style={{ color: "white" }}>{errors.password.message}</p>
        )}

        <label>Confirmar email: </label>
        <input
          {...register("emailConfirmation", {
            required: "Por favor confirmar email!",
            validate: {
              matchesPreviousMail: (value) => {
                const { mail } = getValues();
                return mail === value || "Los emails deben coincidir!";
              }
            }
          })}
          />
          {errors.mailConfirmation && (
            <p style={{ color: "white" }}>
              {errors.mailConfirmation.message}
            </p>
          )}
          {errors?.email?.type === "required" && <p>El campo email es requerido</p>}
                <label>Telefono</label>
                <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}
                {errors?.phone?.type === "required" && <p>El campo telefono es requerido</p>}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" type ="submit">
                  Confirmar compra
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>

      );
};

export default FormComp;
