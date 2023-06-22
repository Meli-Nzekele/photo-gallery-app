const Modal = ({ data, content, setSelectedContent, setShowModal }) => {
  const { name, url, description, date, type } = content;
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h1 className="modalTitle">{name}</h1>
          <button
            className="modalCloseButton"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
        </div>
        <div className="splitContainer">
          <div className="modalImageContainer">
            <img className="modalImage" src={url} alt={name} />
            <p className="modalDescriptionText">{description}</p>
          </div>
          <div className="modalDescription">
            <div className="modalRowData">
              <p className="modalDescriptionText">Date</p>
              <p className="modalDescriptionText">{date}</p>
            </div>
            <div className="modalRowData">
              <p className="modalDescriptionText">Type</p>
              <p className="modalDescriptionText">{type}</p>
            </div>
          </div>
        </div>
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
