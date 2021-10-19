import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneAlbums, addOnePhotos } from "../redux/actionCreators";
import { fetchPhotos } from "../redux/asyncActions/fetchPhotos";
import ModalWindow from "./ModalWindow";

function Content() {
  const [activeAlbum, setActiveAlbum] = useState(0);

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
    console.log(1);
  }, []);

  const addAlbum = useCallback(() => {
    const album = { userId: 1, id: new Date().toString(), title: "user album" };
    dispatch(addOneAlbums(album));
  }, [dispatch]);

  const addPhoto = useCallback(() => {
    const photo = {
      albumId: 90,
      id: new Date().toString(),
      thumbnailUrl: "https://via.placeholder.com/150/a335a",
      title: "officiis similique eligendi excepturi",
      url: "https://avotar.ru/avatar/krutye/150/38.jpg",
    };

    dispatch(addOnePhotos(photo));
  }, [dispatch]);

  const mainContent = albumsFromStore.map((alb) => {
    if (Number(activeAlbum.id) === alb.id) {
      return (
        <React.Fragment key={alb.id}>
          <div className="album-item" id={alb.id}>
            {photosFromStore.map((photo) => (
              <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
            ))}
            <button className="btn__add--photos" onClick={addPhoto}>
              Add photos
            </button>
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
      <ModalWindow>
        <h1>Hello World</h1>
      </ModalWindow>
    </>
  );
}

export default Content;
