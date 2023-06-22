import { useState } from "react";
import { data } from "./content/data";
import Modal from "./modal/modal";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setSelectedContent={setSelectedContent}
          content={selectedContent}
          data={data}
        />
      )}
      <div className="main">
        <Header />
        <div className="container" id="container">
          {data.map((image_data, index) => {
            return (
              <div
                className="imageContainer"
                key={index}
                onClick={() => {
                  setShowModal(true);
                  setSelectedContent(image_data);
                }}
              >
                <img
                  className="imageMain"
                  src={image_data.url}
                  alt={image_data.name}
                />
                <div className="imageDescription">
                  <p className="imageDescriptionText">{image_data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
