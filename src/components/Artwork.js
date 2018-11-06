import React from "react";
import * as contentful from "contentful";

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.client = contentful.createClient({
      space: "dlgxohln8q1h",
      accessToken:
        "207bd0790feb33520b6772a155fecdc0cc0f1399e3ae71d4a2962d236ec86c51"
    });
    this.style = {
      imagesContainer: {
        backgroundColor: "white"
      },
      imageBox: {
        margin: ["9px", "20px", "32px", "0px"]
      },
      painting: {
        height: "auto",
        width: "100%"
      },
      imageText: {
        fontSize: "1em"
      }
    };
    this.fetchPosts = this.fetchPosts.bind(this)
    this.setPosts = this.setPosts.bind(this)
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts() {
    return this.client.getEntries({
        'content_type': 'artwork'
      })
  }

  setPosts(response) {
    this.setState({
      posts: response.items
    });
  }

  render() {
    const posts = this.state.posts;
    const style = this.style;
    return (
      <div style={style.imagesContainer}>
        {posts.map(({ fields }, i) => (
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        ))}
      </div>
    );
  }
}

export default Artwork