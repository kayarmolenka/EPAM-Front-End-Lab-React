import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneAlbums, addOnePhotos } from "../redux/actionCreators";
import { fetchPhotos } from "../redux/asyncActions/fetchPhotos";
import ModalWindow from "./ModalWindow";

function Content() {
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [activeModalAlbum, setActiveModalAlbum] = useState(false);
  const [activeModalPhotos, setActiveModalPhotos] = useState(false);

  const dispatch = useDispatch();

  const albumsFromStore = useSelector((state) => {
    return [...state.albums, ...state.userAlbum.userAlbum];
  });

  const photosFromStore = useSelector((state) => {
    return state.photos;
  });

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

  const callModalWindow = useCallback(() => {
    setActiveModalAlbum(true);
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

  const mainContent = albumsFromStore.map((alb) => {
    if (Number(activeAlbum.id) === alb.id) {
      return (
        <React.Fragment key={alb.id}>
          <div className="album-item" id={alb.id}>
            {photosFromStore.map((photo) => (
              <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
            ))}
            <button className="btn__add--photos" onClick={callModalWindowPhoto}>
              Add photos
            </button>
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
          </div>
          <div className="wrapper-content__arrow-back" onClick={toggleBack}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <p>Collapse album</p>
          </div>
        </React.Fragment>
      );
    }
    return (
      <div className="album-item" id={alb.id} key={alb.id} onClick={startedEvent}>
        {alb.title}
      </div>
    );
  });

  return (
    <>
      <div>{mainContent}</div>
      <button className="btn__add--album" onClick={callModalWindow}>
        Add album
      </button>
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
