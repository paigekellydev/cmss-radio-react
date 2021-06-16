import React, { Component } from 'react';
import { render } from 'react-dom';
import AudioPlayer from 'react-playlist-player';
import ReactPlayer from 'react-player';

export default class Song extends Component  {
  state = {
    currentPlayList: {}
  }
 
  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: '',
        playlistName: '',
        bandName: '',
        songs: [
          {
            position: '1',
            songName: 'foo',
            songUrl: 'https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/LoFi%20FreQ%20-%20Compilation%20Vol.%201%20-%2017%20When%20the%20time%20is%20right.mp3?alt=media&token=42a81073-bad1-482b-9f4c-1e1100108efb'
          }
        // ,
        //   {
        //     position: '2',
        //     songName: 'bar',
        //     songUrl: 'https://open.spotify.com/track/2g4cR4Y16R5BL3xEu3ic0H?si=0b64cc7861a74949'
        //   }
        ],
        type: 'album'
      }
    })
 
  render() {
    return (
      <div>
        {/* <button className={'Demo__load-btn'} onClick={this.loadPlayList}> */}
          {/* load playlist */}
        {/* </button> */}
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
        {/* <ReactPlayer 
            url="https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/LoFi%20FreQ%20-%20Compilation%20Vol.%201%20-%2017%20When%20the%20time%20is%20right.mp3?alt=media&token=42a81073-bad1-482b-9f4c-1e1100108efb"
        /> */}
      </div>
    )
  }
}
