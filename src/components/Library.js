import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }
    render() {
        return (
            <section className="library">
              {this.state.albums.map(( album, index ) =>
                <div className="container">
                        <Link to={`/album/${album.slug}`} key = {index}>
                            <img id="album-art-libary" src={album.albumCover} alt={album.title} />
                        <div className="album-info overlay">
                            <div className="text">
                                <div className="album-title">{album.title}</div>
                                <div className="album-artist">{album.artist}</div>
                                <div className="song-count">{album.songs.length} songs </div>
                            </div>
                        </div>
                        </Link>
                </div>
                )
              }
            </section>
        );
    }
}

export default Library;