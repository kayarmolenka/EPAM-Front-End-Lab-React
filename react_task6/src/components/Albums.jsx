import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useRouteMatch } from "react-router";
import Photos from "./Photos";
import { useMemo } from "react";

function Albums(props) {
  const userInfo = JSON.parse(localStorage.getItem("ActiveUser"));
  const { path, url } = useRouteMatch();

  const callModalWindow = useCallback(() => {
    props.setActiveModalAlbum(true);
  }, []);

  const albumsFromStore = useSelector((state) => {
    return [...state.albums, ...state.userAlbum.userAlbum];
  });

  const albums = useMemo(() => {
    return albumsFromStore.map((alb) => {
      if (Number(props.activeAlbum.id) === alb.id && userInfo) {
        return (
          // <Route path={`${path}/${alb.id}`} key={alb.id}>
          <Photos
            activeAlbum={props.activeAlbum}
            callModalWindowPhoto={props.callModalWindowPhoto}
            toggleBack={props.toggleBack}
          />
          // </Route>
        );
      }
      if (Number(props.activeAlbum.id) === alb.id) {
        return (
          // <Route path={`${path}/:${alb.id}`} key={alb.id}>
          <Photos
            activeAlbum={props.activeAlbum}
            callModalWindowPhoto={props.callModalWindowPhoto}
            toggleBack={props.toggleBack}
          />
          // </Route>
        );
      }

      const link = (
        <Link to={`${url}/:${alb.id}`}>
          <div className="album-item" id={alb.id} key={alb.id} onClick={props.startedEvent}>
            {alb.title}
          </div>
        </Link>
      );

      const linkForUserId = (
        <Link to={`${url}/${alb.id}`}>
          <div className="album-item" id={alb.id} key={alb.id} onClick={props.startedEvent}>
            {alb.title}
          </div>
        </Link>
      );

      return <>{userInfo ? linkForUserId : link}</>;
    });
  }, [
    albumsFromStore,
    // path,
    props.activeAlbum,
    props.callModalWindowPhoto,
    props.startedEvent,
    props.toggleBack,
    url,
    userInfo,
  ]);

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
