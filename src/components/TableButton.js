import React, { Component } from 'react';

class TableButton extends Component {
    
    render() {
        let className = 'song-index';
        let isPlayingSong = this.props.currentSong;
        let songIsPlaying = this.props.isPlaying;
        let buttonOf = this.props.buttonOf;
        let isCurrentSong = isPlayingSong===buttonOf;
        if(!songIsPlaying && !isCurrentSong) {
          return (
            <button>
              <span className={className}>{this.props.songIndex+1}</span>
              <span id="hover" className="ion-play"></span>
            </button>
          );
        } else if (songIsPlaying && isCurrentSong) {
          className = 'ion-pause';
          return (
            <button>
              <span className={className}></span>
            </button>
          );
        } else if (!songIsPlaying && isCurrentSong) {
          className = 'ion-play';
          return (
            <button>
              <span className={className}></span>
            </button>
          );
        } else {
            return (
              <button>
                <span className={className}>{this.props.songIndex+1}</span>
                <span id="hover" className="ion-play"></span>
              </button>
            );
          }
      }
    }
    
      

export default TableButton