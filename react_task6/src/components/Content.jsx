import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addOneAlbums, addOnePhotos } from "../redux/actionCreators";
import { fetchPhotos } from "../redux/asyncActions/fetchPhotos";
import Albums from "./Albums";
import ModalWindow from "./ModalWindow";

function Content() {
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [activeModalAlbum, setActiveModalAlbum] = useState(false);
  const [activeModalPhotos, setActiveModalPhotos] = useState(false);

  const dispatch = useDispatch();

  const handleAlbum = useCallback(
    (album) => {
      setActiveAlbum(album);
      dispatch(fetchPhotos(album));
    },
    [dispatch],
  );

  const startedEvent = useCallback((e) => handleAlbum(e.target), [handleAlbum]);

  const toggleBack = useCallback(() => {
    setActiveAlbum(0);
  }, []);

  const callModalWindowPhoto = useCallback(() => {
    setActiveModalPhotos(true);
  }, []);

  const addAlbum = useCallback(
    (albumTitle) => {
      const album = { userId: 1, id: new Date().toString(), title: albumTitle };
      dispatch(addOneAlbums(album));
    },
    [dispatch],
  );

  const addPhoto = useCallback(
    (urlPhoto) => {
      const photo = {
        albumId: 90,
        id: new Date().toString(),
        thumbnailUrl: urlPhoto,
        title: "officiis similique eligendi excepturi",
        url: urlPhoto,
      };

      dispatch(addOnePhotos(photo));
    },
    [dispatch],
  );

  return (
    <>
      <Albums
        setActiveModalAlbum={setActiveModalAlbum}
        startedEvent={startedEvent}
        activeAlbum={activeAlbum}
        callModalWindowPhoto={callModalWindowPhoto}
        toggleBack={toggleBack}
      />
      {activeModalPhotos && (
        <ModalWindow
          title="Do you want to add photos?"
          activeModal={activeModalPhotos}
          onClose={setActiveModalPhotos}
          textBody="Insert a link to the photo. You can choose one of ours:"
          textBodyTwo="https://avotar.ru/avatar/krutye/150/36.jpg https://avotar.ru/avatar/krutye/150/34.jpg https://avotar.ru/avatar/pozitivnye/150/43.jpg"
          addAlbum={addPhoto}
        ></ModalWindow>
      )}
      {activeModalAlbum && (
        <ModalWindow
          title="Do you want to add album?"
          activeModal={activeModalAlbum}
          onClose={setActiveModalAlbum}
          textBody="If yes, enter its name and click submit."
          addAlbum={addAlbum}
        ></ModalWindow>
      )}
    </>
  );
}

export default Content;
