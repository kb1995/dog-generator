import React from 'react';

function Image(props) {
  return (
    <div>
      <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={props.url}/>
    </div>
  );
}

export default Image;