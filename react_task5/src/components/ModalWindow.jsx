import Portal from "./Portal";
import React, { useCallback, useState } from "react";

function ModalWindow({ title, activeModal, onClose, addAlbum }) {
  const [valueInput, setValueInput] = useState("");

  const closeModalWindow = useCallback(() => {
    onClose();
    setValueInput("");
  }, [onClose]);

  const createAlbum = useCallback(() => {
    addAlbum(valueInput);
    onClose();
    setValueInput("");
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
        // <Portal>
        <div className="modal-shadow" onClick={closeModalWindow}>
          <div className="modal-window__wrapper" onClick={stopClosed}>
            <div className="modal-window__header">
              <div className="modal-window__title">{title}</div>
              <div className="modalClose" onClick={closeModalWindow}>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="modal-window__body">
              <div className="modal-body__text">If yes, enter its name and click submit.</div>
              <input
                value={valueInput}
                onChange={handleInputValue}
                className="modal-body__input"
                type="text"
              />
            </div>
            <div className="modal-window__footer">
              <button onClick={closeModalWindow}>Close</button>
              <button onClick={createAlbum}>Create</button>
            </div>
          </div>
        </div>
        // </Portal>
      )}
    </>
  );
}

export default ModalWindow;
