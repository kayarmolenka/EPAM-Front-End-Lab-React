import { useSelector } from "react-redux";

const Album = () => {
  const albumsFromStore = useSelector((state) => {
    return [...state.albums, ...state.userAlbum.userAlbum];
  });

  return (
    <>
      {albumsFromStore.map((alb) => {
        <div className="album-item" id={alb.id} key={alb.id}>
          {alb.title}
        </div>;
      })}
    </>
  );
};

export default Album;
