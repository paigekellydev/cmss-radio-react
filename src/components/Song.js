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
      
                <p>Heeyeyeye</p>
                <Container>
                  <Row>
                    <Col lg={4}>
                    </Col>
                  </Row>
                </Container>
          </div>
        )
      }
    }