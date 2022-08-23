import React, { useEffect, useRef } from "react";
import Cross from "../../assets/Cross.png";
import "./styles.scss";

const Modal = ({ setModal, children }) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <section className="modal">
      <div className="modal-content" ref={modalRef}>
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
