import React from "react";
import * as contentful from "contentful";
import styled from "styled-components";

const ArtworkContainer = styled.div`
  background-color: white;
`;

const ImageBox = styled.div`
  margin: 9px 20px 32px 0px;
`;

const ImageItem = styled.img`
  height: auto;
  width: 100%;
`;

const ImageText = styled.span`
  font-size: 1em;
`;

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

    this.fetchPosts = this.fetchPosts.bind(this);
    this.setPosts = this.setPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts() {
    return this.client.getEntries({
      content_type: "artwork"
    });
  }

  setPosts(response) {
    this.setState({
      posts: response.items
    });
  }

  render() {
    const posts = this.state.posts;
    return (
      <ArtworkContainer>
        {posts.map(({ fields }, i) => (
          <ImageBox key={i}>
            {fields.images.map(({ fields }, i) => (
              <div key={i}>
                <ImageItem src={"http:" + fields.file.url} />
              </div>
            ))}
            <ImageText>
              {fields.title && <a>{fields.title}</a>}
              {fields.year && <a>, {fields.year}</a>}
              {fields.medium && <a>, {fields.medium.toLowerCase()}</a>}
              {fields.dimensions && <a>, {fields.dimensions}</a>}
            </ImageText>
            {console.log(fields)}
          </ImageBox>
        ))}
      </ArtworkContainer>
    );
  }
}

export default Artwork;
