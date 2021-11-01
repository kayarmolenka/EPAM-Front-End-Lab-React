import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { Route } from "react-router";
import Photos from "./Photos";

function Albums(props) {
  const userInfo = JSON.parse(localStorage.getItem("ActiveUser"));

  const callModalWindow = useCallback(() => {
    props.setActiveModalAlbum(true);
  }, []);

  const albumsFromStore = useSelector((state) => {
    return [...state.albums, ...state.userAlbum.userAlbum];
  });

  const albums = albumsFromStore.map((alb) => {
    if (Number(props.activeAlbum.id) === alb.id && userInfo) {
      return (
        <Route path="/user/:id/albums/:albumId" key={alb.id}>
          <Photos
            activeAlbum={props.activeAlbum}
            callModalWindowPhoto={props.callModalWindowPhoto}
            toggleBack={props.toggleBack}
          />
        </Route>
      );
    }
    if (Number(props.activeAlbum.id) === alb.id) {
      return (
        <Route path="/albums/:id" key={alb.id}>
          <Photos
            activeAlbum={props.activeAlbum}
            callModalWindowPhoto={props.callModalWindowPhoto}
            toggleBack={props.toggleBack}
          />
        </Route>
      );
    }

    const link = (
      <Link to="/albums/:id">
        <div className="album-item" id={alb.id} key={alb.id} onClick={props.startedEvent}>
          {alb.title}
        </div>
      </Link>
    );

    const linkForUserId = (
      <Link to="/user/:id/albums/:albumId">
        <div className="album-item" id={alb.id} key={alb.id} onClick={props.startedEvent}>
          {alb.title}
        </div>
      </Link>
    );

    return <>{userInfo ? linkForUserId : link}</>;
  });
  return (
    <>
      {albums}
      <button className="btn__add--album" onClick={callModalWindow}>
        Add album
      </button>
    </>
  );
}

export default Albums;
