import React, { Component } from 'react';
import { render } from 'react-dom';
// import AudioPlayer from 'react-playlist-player';
// import ReactPlayer from 'react-player';
// import ReactAudioPlayer from 'react-audio-player';
// import { toggleAudio } from 'react-playlist-player'
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

import {Container, Row, Col, Button} from 'react-bootstrap'


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
            songUrl: 'https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media&token=a71e9224-b085-4f89-8eec-9384a48b27f7'
          }
        ],
        type: 'album'
      }
    }

    handleClick = () => {
      document.getElementById('audio').src = this.state.currentPlayList.songs[0].songUrl
    }

  render() {
        return (
              <div>
                  {/* <button onClick={this.loadPlayList}>Load playlist</button> */}
                {/* {this.loadPlayList()} */}
                <p>Heeyeyeye</p>
                      {/* <AudioPlayer
                        id="audio-player"
                        // autoPlay
                        layout="stacked-reverse"
                        showSkipControls={true}
                        showJumpControls={false}
                        src='https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media&token=a71e9224-b085-4f89-8eec-9384a48b27f7'
                        onPlay={e => console.log("onPlay")}
                        onClickPrevious={this.handleClickPrevious}
                        onClickNext={this.handleClickNext}
                      /> */}
                <Container>
                  <Row>
                    <Col lg={4}>
                    </Col>
                  </Row>
                </Container>
                {/* <ReactPlayer 
                    url="https://firebasestorage.googleapis.com/v0/b/devsarmico-heavycol.appspot.com/o/audios%2F01%20-%20Once.mp3?alt=media&token=1f326545-e3d4-4ccb-a0c6-c92291aad62b"
                    controls
                    autoPlay
                    config={{
                    file: {
                      forceAudio: true
                    }}}
                /> */}
          </div>
        )
      }
    }