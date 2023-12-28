import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ onSelectCard, onCreateModal, clothingItems }) {
  return (
    <div className="clothes__items">
      <div className="clothes__items-heading-wrapper">
        <p className="clothes__items-heading">Your items</p>
        <button
          type="submit"
          className="clothing__items-add-button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothing__items-cards">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
}
export default ClothesSection;
