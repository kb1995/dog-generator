import React from 'react';
import Image from '../../components/Image'
import Video from '../../components/Video'

const apiURL = "https://random.dog/woof.json"
const imageTypes = ["jpg", "png", "jpeg", "gif"]
const videoTypes = ["webm", "mp4"]

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
          },
        })
        console.log(this.state.currentDogUrl)
      },
        (error) => {
          console.log(error)
        }
      )
  }

  favoriteADog = () => {
    let array = JSON.parse(localStorage.getItem("favouriteDogs")) || []

    if (!array.some(e => e.url == this.state.currentDogUrl.url)){
      array.push(this.state.currentDogUrl)
      localStorage.setItem("favouriteDogs", JSON.stringify(array))
      // TODO success message that fades after 2-3 seconds?
    } else{
      alert("This dog is already in your favourites.")
    }

    this.getNewImage()
  }

  render() {
    return (
      <div>
        <div>
          {imageTypes.includes(this.state.currentDogUrl.mediaType) && <Image url={this.state.currentDogUrl.url} />}
          {videoTypes.includes(this.state.currentDogUrl.mediaType) && <Video url={this.state.currentDogUrl.url} />}
        </div>
        <h1>Dog Image Generator!</h1>
        <button onClick={() => this.favoriteADog()}>Save this for later admiration</button>
        <button onClick={() => this.getNewImage()}>Get new Doggo</button>
      </div>
    );
  }
}

export default Home;