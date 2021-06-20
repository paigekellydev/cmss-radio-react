import React, { Component } from 'react';
import { render } from 'react-dom';
import AudioPlayer from 'react-playlist-player';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { toggleAudio } from 'react-playlist-player'

export default class Song extends Component  {
  state = {
      currentPlayList: {
        playlistCoverUrl: '',
        playlistName: '',
        bandName: '',
        songs: [
          {
            position: '1',
            songName: 'foo',
            songUrl: 'https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media'
          }
        ],
        type: 'album'
      }
    }

  render() {
        return (
              <div>
                  {/* <button onClick={this.loadPlayList}>Load playlist</button> */}
                {/* {this.loadPlayList()} */}
                <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
                {/* <ReactPlayer 
                    url="https://firebasestorage.googleapis.com/v0/b/devsarmico-heavycol.appspot.com/o/audios%2F01%20-%20Once.mp3?alt=media&token=1f326545-e3d4-4ccb-a0c6-c92291aad62b"
            /> */}
          </div>
        )
      }
    }