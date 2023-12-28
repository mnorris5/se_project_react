import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
