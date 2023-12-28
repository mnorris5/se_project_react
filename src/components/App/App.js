import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getItems, addItem, deleteItem } from "../../utils/api";
// import { defaultClothingItems } from "../../utils/constants";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";
// import { Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  // const weatherTemp = "75° F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleDeleteCard = () => {
    console.log(selectedCard);
    deleteItem(selectedCard)
      .then(() => {
        setClothingItems(
          clothingItems.filter((cards) => cards._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
      // const weatherInF = (9 / 5) * temp + 32;
      // setTemp(Math.round(weatherInF));
    }

    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
      // const weatherInC = (temp - 32) * (5 / 9);
      // setTemp(Math.round(weatherInC));
    }
  };

  console.log(clothingItems);

  const onAddItem = ({ name, imageUrl, weather }) => {
    addItem({ name, imageUrl, weather })
      .then((data) => {
        console.log(data);
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("currentTemperatureUnit", currentTemperatureUnit);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteCard}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
