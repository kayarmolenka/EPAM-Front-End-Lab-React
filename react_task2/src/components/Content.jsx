import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    console.log("it is did mount");
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => this.setState({ albums: data }));
  }

  render() {
    return (
      <div className="content">
        <ol>
          {this.state.albums.map((alb) => (
            <li key={alb.id}>{alb.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Content;
