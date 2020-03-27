import React from 'react';

function Video(props) {
  return (
    <div>
      <video style={{ width: "300px", height: "300px", objectFit: "cover" }} src={props.url} controls autoPlay />    
    </div>
  );
}

export default Video;