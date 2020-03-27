import React from 'react';
import Image from '../../components/Image'
import Video from '../../components/Video'

const imageTypes = ["jpg", "png", "jpeg", "gif"]
const videoTypes = ["webm", "mp4"]

// TODO

// handle empty state
// ability to delete from favourites
// ability to clean favourites with one button (extra)

function Favourites() {
  return (
    <div>
      <h1>Favourites</h1>
      {JSON.parse(localStorage.getItem("favouriteDogs")) && JSON.parse(localStorage.getItem("favouriteDogs")).map((item, idx) => {
        return(
          <div key={idx}>
            {imageTypes.includes(item.mediaType) && <Image url={item.url} />}
            {videoTypes.includes(item.mediaType) && <Video url={item.url} />}
          </div>
        )
      })}
    </div>
  );
}

export default Favourites;