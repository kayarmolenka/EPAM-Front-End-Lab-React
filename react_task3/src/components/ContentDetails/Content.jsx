import Album from "./Album";
import { useState, useEffect } from "react";

function Content() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((album) => {
        console.log("album", album);
        setAlbums(album);
      });
  }, []);

  const showPhotos = async (e) => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((photo) => {
        setPhotos(photo);
        // console.log("photos", photos);
      });
    console.log(e.target);

    // const value = photos.map((ph) => {
    //   console.log(ph);
    //   return <img src={ph.thumbnailUrl} alt="" />;
    // });
    // e.target.innerHTML = value.map((el) => el.thumbnailUrl);
  };
  console.log("photos", photos);

  // {photos.map((ph) => (
  //   <img src={ph.thumbnailUrl} alt="" />
  // ))}
  const po = photos.map((ph) => ph.thumbnailUrl);
  console.log("po", po);
  {
    /* <ol><Album showPhotos={showPhotos} /></ol> */
  }

  return albums.map(
    (alb) =>
      !po.length && (
        <div className="album-item" id={alb.id} key={alb.id} onClick={showPhotos}>
          {alb.title}
        </div>
      ),
  );
}

export default Content;
