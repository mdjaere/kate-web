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

    this.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.screenWidth = window.screen.width;
    this.deviceSpecificImageWidth = this.pixelRatio * this.screenWidth;

    this.client = contentful.createClient({
      space: "dlgxohln8q1h",
      accessToken:
        "207bd0790feb33520b6772a155fecdc0cc0f1399e3ae71d4a2962d236ec86c51"
    })

 }

  sortPostsFunction(a,b){
    const aIndex = a.fields.displayOrder / 100 || a.fields.year || 3000
    const bIndex = b.fields.displayOrder / 100 || b.fields.year || 3000
    const sortValue =  bIndex - aIndex
    return sortValue
  }

  componentDidMount() {
    // Fetching posts
    this.client
      .getEntries({
        content_type: "artwork"
      })

      .then(response => {
        this.setState({
          posts: response.items.sort(this.sortPostsFunction)
        });
      })
      .catch(error => console.error("Cannot fetch posts:", error));

  }


  render() {
    const posts = this.state.posts;
    return (
      <ArtworkContainer>
        {posts.map(({ fields }, i) => (
          <ImageBox key={i}>
            {fields.images.map(({ fields }, i) => (
              <div key={i}>
                <ImageItem
                  src={
                    "http:" +
                    fields.file.url +
                    "?w=" +
                    this.deviceSpecificImageWidth
                  }
                />
              </div>
            ))}
            <ImageText>
              {fields.title && <a>{fields.title}</a>}
              {fields.year && <a>, {fields.year}</a>}
              {fields.medium2 && <a>, {fields.medium2.toLowerCase()}</a>}
              {fields.dimensions && <a>, {fields.dimensions}</a>}
              {fields.project && <a>, {fields.project}</a>}
            </ImageText>
          </ImageBox>
        ))}
      </ArtworkContainer>
    );
  }
}

export default Artwork;
