import React from 'react';
import Image from '../../components/Image'
import Video from '../../components/Video'

const imageTypes = ["jpg", "png", "jpeg", "gif"]
const videoTypes = ["webm", "mp4"]

class Favourites extends React.Component {
  removeFromFavourites = (key) => {
    let array = JSON.parse(localStorage.getItem("favouriteDogs"))
    array.splice(key, 1);
    localStorage.setItem("favouriteDogs", JSON.stringify(array))

    this.forceUpdate();
  }

  removeAll = () => {
    localStorage.removeItem("favouriteDogs");
    this.forceUpdate();
    alert("All saved dogs are deleted.")
  }

  render(){
    if(JSON.parse(localStorage.getItem("favouriteDogs")) == undefined || !JSON.parse(localStorage.getItem("favouriteDogs")).length){
      return(
        <p>You don't have any saved dogs. Go back and add some.</p>
      )
    }
    return (
      <div>
        <h1>Favourites</h1>
        <button onClick={() => this.removeAll()}>Delete all</button>
        <hr/>
        {JSON.parse(localStorage.getItem("favouriteDogs")).map((item, idx) => {
          return(
            <div key={idx}>
              {imageTypes.includes(item.mediaType) && <Image url={item.url} />}
              {videoTypes.includes(item.mediaType) && <Video url={item.url} />}
              <button onClick={() => this.removeFromFavourites(idx)}>Remove from favourites</button>
              <hr/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Favourites;