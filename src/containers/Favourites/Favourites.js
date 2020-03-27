import React from 'react';

const imageTypes = ["jpg", "png", "jpeg"]
const videoTypes = ["webm", "mp4", "gif"]

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
            {imageTypes.includes(item.mediaType) && <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={item.url} />}
            {videoTypes.includes(item.mediaType) && <video style={{ width: "300px", height: "300px", objectFit: "cover" }} src={item.url} controls autoPlay />}
          </div>
        )
      })}
    </div>
  );
}

export default Favourites;