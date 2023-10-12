import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div className="header__date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            Add New Clothes
          </button>
        </div>
        <div className="header__name">Name</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
