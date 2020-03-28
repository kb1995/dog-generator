import React from 'react';

const imageTypes = ["jpg", "png", "jpeg", "gif"]
const videoTypes = ["webm", "mp4"]

class Asset extends React.Component {
  state = {
    loaded: false,
    noLoadState: this.props.noLoadState || false
  }

  componentDidUpdate(){
    if(this.state.noLoadState ||this.state.loaded){
      this.setState({ loaded: false })  
    }
  }

  shouldComponentUpdate(nextProps, nextState) { 
    // a hack to reset the state after you load a new image. What's a more efficient way of doing it?
    if (this.state.noLoadState || this.state.loaded) { 
      return false;
    }
    return true;
  }
  
  handleAssetLoaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    return (
      <>
        <p className={this.state.noLoadState ||this.state.loaded ? "hidden" : "block"}>loading...</p>
        <div className={`${this.state.noLoadState ||this.state.loaded ? "block" : "hidden"} w-full h-full`}>
          {imageTypes.includes(this.props.data.mediaType) && <img className="object-cover w-full h-full" src={this.props.data.url} alt="" onLoad={() => this.handleAssetLoaded()} />}
          {videoTypes.includes(this.props.data.mediaType) && <video className="object-cover w-full h-full" src={this.props.data.url} controls autoPlay muted onLoadedData={() => this.handleAssetLoaded()} />}
        </div>
      </>
    );
  }
}

export default Asset;