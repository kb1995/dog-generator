import React from 'react';
import Asset from '../../components/Asset'

const apiURL = "https://random.dog/woof.json"

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
      <div className="flex items-center flex-col lg:flex-row mt-16 lg:mt-32">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold lg:mb-12 text-center lg:text-left leading-tight">Dog Image Generator!</h1>
          <div className="flex flex-col lg:flex-row items-center my-6">
            <span onClick={() => this.getNewImage()} className="inline-flex rounded-md shadow-sm mr-3 mb-3 lg:mb-0">
              <button onClick={() => this.favoriteADog()} type="button" className="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Get a new doggo
              </button>
            </span>
            <span className="inline-flex rounded-md shadow-sm">
              <button onClick={() => this.favoriteADog()} type="button" className="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150">
                Save for later admiration
              </button>
            </span>
          </div>
        </div>
        <div className="lg:w-1/2" style={{height: "400px"}}>
          <div className="lg:w-3/5 mx-auto h-full">
            <Asset data={this.state.currentDogUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;