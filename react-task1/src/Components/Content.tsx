import "./../styles.css";

function Content({ state } : any) {
  const posts = state.map((post : any) => {
    return (
      <li className="list-comment" key={post.id}>
        <span className="list-comment-name">{post.name}</span>: {post.text}
      </li>
    );
  });
  console.log(state);
  return (
    <div className="content_wrapper">
      <h2>Messages from other users</h2>
      <ul>{posts}</ul>
    </div>
  );
}

export default Content;
