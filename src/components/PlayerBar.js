import React, { Component } from 'react';

class PlayerBar extends Component {
    render() {
        return (
            <div className="player-bar">
                <div className="controls">
                    <div className="buttons">
                        <button className="previous" onClick={this.props.handlePrevClick}>
                            <i className="fas fa-backward"></i>
                        </button>
                        <button className="play-pause" onClick={this.props.handleSongClick}>
                            <i className={this.props.isPlaying ? 'fas fa-pause' : "fas fa-play"}></i>
                        </button>
                        <button id="next" onClick={this.props.handleNextClick}>
                            <i className="fas fa-forward"></i>
                        </button>
                    </div>
                    <div className="time">
                        <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                        <input
                            type="range"
                            className="seek-bar"
                            value={(this.props.currentTime / this.props.duration) || 0}
                            max="1"
                            min="0"
                            step="0.01"
                            onChange={this.props.handleTimeChange}
                        />
                        <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
                    </div>
                </div>
                <div className="volume-control">
                    <i className="fas fa-volume-down"></i>
                    <input 
                        type="range" 
                        className="seek-bar" 
                        value={this.props.volume}
                        min="0"
                        max="1"
                        step="0.01"
                        onChange={this.props.handleVolumeChange}
                        />
                    <i className="fas fa-volume-up"></i>
                </div>
            </div>
        )
    }
}

export default PlayerBar;