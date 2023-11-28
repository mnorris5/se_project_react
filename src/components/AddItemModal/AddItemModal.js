import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };
  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New Garments"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <label className="modal__label">Select the weather type</label>
      <div className="modal__temp">
        <div>
          <input type="radio" id="hot" value="hot" name="weather type" />
          <label id="hot">Hot</label>
        </div>
        <div>
          <input type="radio" id="warm" value="warm" name="weather type" />
          <label id="warm">Warm</label>
        </div>
        <div>
          <input type="radio" id="cold" value="cold" name="weather type" />
          <label id="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
