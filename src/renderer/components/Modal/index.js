import React from "react";
import Cross from "../../assets/Cross.png";
import "./styles.scss";

const Modal = ({ setModal, children }) => {
  return (
    <section className="modal">
      <div className="modal-content">
        <img
          src={Cross}
          onClick={() => setModal((currModal) => !currModal)}
          className="modal-cross"
        />
        {children}
      </div>
    </section>
  );
};

export default Modal;
