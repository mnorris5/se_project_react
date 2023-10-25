import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New Garments"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onAddItem}
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
