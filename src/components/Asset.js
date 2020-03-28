import React from 'react';

const imageTypes = ["jpg", "png", "jpeg", "gif"]
const videoTypes = ["webm", "mp4"]

function Asset(props) {
  return (
    <>
      {imageTypes.includes(props.data.mediaType) && <img className="object-cover w-full h-full" src={props.data.url}/>}
      {videoTypes.includes(props.data.mediaType) && <video className="object-cover w-full h-full" src={props.data.url} controls autoPlay muted />}
    </>
  );
}

export default Asset;