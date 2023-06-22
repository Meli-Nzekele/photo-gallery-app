const Modal = ({ data, content, setSelectedContent, setShowModal }) => {
  const { name, url, description, date, type, credit } = content;
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <button
            className="modalCloseButton"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
        </div>
        <h1 className="modalTitle">{name}</h1>
        <div className="modalImageContainer">
          <img className="modalImage" src={url} alt={name} />
        </div>
        <div className="modalDescription">
          <p className="modalDescriptionCredit">{credit}</p>
          <p className="modalDescriptionText">{description}</p>
          <p className="modalDescriptionDetails">Published: {date}</p>
          <p className="modalDescriptionDetails">Type: {type}</p>
        </div>
        <p className="modalImageText">Select an image below</p>
        <div className="modalImagePicker">
          {data.map((image_data, index) => {
            return (
              <div
                className="imageContainer"
                key={index}
                onClick={() => {
                  setSelectedContent(image_data);
                }}
              >
                <img className="image" src={image_data.url} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
