import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-image">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt="Clothing item"
        />
        <div className="modal__info">
          <div>{selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
          <button
            className="modal__delete-button"
            type="button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
