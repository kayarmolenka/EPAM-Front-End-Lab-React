function AlbumItem(props) {
  return (
    <div className="album-item" id={props.alb.id} key={props.alb.id} onClick={props.showPhotos}>
      {props.alb.title}
    </div>
  );
}

export default AlbumItem;
