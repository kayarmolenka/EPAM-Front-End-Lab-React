import React from "react";
import { useSelector } from "react-redux";

function Photos(props) {
  const albumsFromStore = useSelector((state) => {
    return [...state.albums, ...state.userAlbum.userAlbum];
  });

  const photosFromStore = useSelector((state) => {
    return state.photos;
  });

  const mainContent = albumsFromStore.map((alb) => {
    if (Number(props.activeAlbum.id) === alb.id) {
      console.log(photosFromStore);
      console.log(props.activeAlbum.id);
      return (
        <React.Fragment key={alb.id}>
          <div className="album-item" id={alb.id}>
            {photosFromStore.map((photo) => (
              <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
            ))}

            <button className="btn__add--photos" onClick={props.callModalWindowPhoto}>
              Add photos
            </button>
          </div>

          <div className="wrapper-content__arrow-back" onClick={props.toggleBack}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <p>Collapse album</p>
          </div>
        </React.Fragment>
      );
    }
  });
  return <>{mainContent}</>;
}

export default Photos;
