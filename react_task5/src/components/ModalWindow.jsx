import React, { useCallback, useState } from "react";

function ModalWindow({ title, activeModal, onClose, textBody, addAlbum, textBodyTwo }) {
  const [valueInput, setValueInput] = useState("");

  const closeModalWindow = useCallback(() => {
    onClose();
    setValueInput("");
  }, [onClose]);

  const createAlbum = useCallback(() => {
    if (valueInput !== "") {
      addAlbum(valueInput);
      onClose();
      setValueInput("");
    } else {
      document.querySelector(".warning-block").classList.add("warning-block--show");
    }
  }, [addAlbum, onClose, valueInput]);

  const handleInputValue = useCallback(
    (e) => {
      setValueInput(e.target.value);
    },
    [setValueInput],
  );

  const stopClosed = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <>
      {activeModal && (
        <div className="modal-shadow" onClick={closeModalWindow}>
          <div className="modal-window__wrapper" onClick={stopClosed}>
            <div className="modal-window__header">
              <div className="modal-window__title">{title}</div>
              <div className="modalClose" onClick={closeModalWindow}>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="modal-window__body">
              <div className="modal-body__text">{textBody}</div>
              <div className="modal-body__text">{textBodyTwo}</div>
              <input
                value={valueInput}
                onChange={handleInputValue}
                className="modal-body__input"
                type="text"
              />
              <div className="warning-block">Enter the correct data</div>
            </div>
            <div className="modal-window__footer">
              <button onClick={closeModalWindow}>Close</button>
              <button onClick={createAlbum}>Create</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWindow;
