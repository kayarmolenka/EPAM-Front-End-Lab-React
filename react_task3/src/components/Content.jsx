import React, { useState, useEffect, useCallback } from "react";

function Content() {
  const [albums, setAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [photos, setPhotos] = useState([]);

  const handleAlbum = useCallback((album) => {
    setActiveAlbum(album);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((album) => {
        setAlbums(album);
      })
      .catch((er) => console.log("ERRRROOR", er));
  }, [albums]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.id}/photos`)
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos);
      })
      .catch((er) => console.log("ERRRROOR", er));
  }, [activeAlbum]);

  const toggleBack = useCallback(() => {
    setActiveAlbum(0);
  }, []);

  return albums.map((alb) => {
    if (Number(activeAlbum.id) === alb.id) {
      return (
        <React.Fragment key={alb.id}>
          <div className="album-item" id={alb.id} key={alb.title}>
            {photos.map((photo) => (
              <img className="wrapper-content__picture" key={photo.id} src={photo.thumbnailUrl} alt="" />
            ))}
          </div>
          <div className="wrapper-content__arrow-back" onClick={toggleBack}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <p>Collapse album</p>
          </div>
        </React.Fragment>
      );
    }
    return (
      <div className="album-item" id={alb.id} key={alb.id} onClick={(e) => handleAlbum(e.target)}>
        {alb.title}
      </div>
    );
  });
}

export default Content;
