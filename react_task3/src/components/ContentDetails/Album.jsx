import { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";

function Album(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((album) => {
        console.log("album", album);
        setAlbums(album);
      });
  }, []);

  const al = albums.map((alb) => <AlbumItem alb={alb} showPhotos={props.showPhotos} />);

  return <>{al}</>;
}

export default Album;
