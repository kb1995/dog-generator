import React from 'react';

const apiURL = "https://random.dog/woof.json"
const imageTypes = ["jpg", "png", "jpeg"]
const videoTypes = ["webm", "mp4", "gif"]

class Home extends React.Component {
  state = {
    currentDogUrl: {
      url: "#",
      mediaType: "",
    },
  }

  componentDidMount() {
    this.getNewImage()
  }

  getNewImage = () => {
    fetch(apiURL).then(res => res.json())
      .then((result) => {
        this.setState({
          currentDogUrl: {
            url: result.url,
            mediaType: result.url.split(".").slice(-1)[0].toLowerCase()
          }
        })
        console.log(this.state.currentDogUrl)
      },
        (error) => {
          console.log(error)
        }
      )
  }
  render() {
    return (
      <div>
        <div>
          {imageTypes.includes(this.state.currentDogUrl.mediaType) && <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={this.state.currentDogUrl.url} />}
          {videoTypes.includes(this.state.currentDogUrl.mediaType) && <video style={{ width: "300px", height: "300px", objectFit: "cover" }} src={this.state.currentDogUrl.url} controls autoPlay />}

        </div>
        <h1>Dog Image Generator!</h1>
        <button>Save this for later admiration</button>
        <button onClick={() => this.getNewImage()}>Get new Doggo</button>
      </div>
    );
  }
}

export default Home;