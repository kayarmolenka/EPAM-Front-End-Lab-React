import { Route } from "react-router";
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
          {/* <Route path="/albums/:id"> */}
          <div className="album-item" id={alb.id}>
            {photosFromStore.map((photo) => (
              <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
            ))}
            {/* {photosFromStore.map((photo) => {
                 if() {
                    <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
                 }
             })} */}
            <button className="btn__add--photos" onClick={props.callModalWindowPhoto}>
              Add photos
            </button>
            {/* {activeModalPhotos && (
                <ModalWindow
                  title="Do you want to add photos?"
                  activeModal={activeModalPhotos}
                  onClose={setActiveModalPhotos}
                  textBody="Insert a link to the photo. You can choose one of ours:"
                  textBodyTwo="https://avotar.ru/avatar/krutye/150/36.jpg https://avotar.ru/avatar/krutye/150/34.jpg https://avotar.ru/avatar/pozitivnye/150/43.jpg"
                  addAlbum={addPhoto}
                ></ModalWindow>
              )} */}
          </div>
          {/* </Route> */}
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
