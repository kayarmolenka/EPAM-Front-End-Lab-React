function ScrollItem() {
  const scrollPage = (e) => {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    window.scrollTo(e.view.pageYOffset, scrollHeight);
  };

  return (
    <button className="btn_scroll" onClick={scrollPage}>
      Scroll page
    </button>
  );
}

export default ScrollItem;
