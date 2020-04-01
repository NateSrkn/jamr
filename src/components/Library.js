import React, { useState } from 'react';
import { Image } from './Image'
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Album = styled.div`
    margin: 5px;
    color: white;
`

const Library = () => {
    let [albums] = useState(albumData)
    return (
        <Container>
            {albums.map(album => (
                <Album key={album.slug}>
                    <Link className="album-link" to={`/album/${album.slug}`}>
                        <Image className="album-cover" src={album.albumCover} alt={album.title} />
                        <div className="album-info">
                            <div className="album-title">{album.title}</div>
                            <div className="album-artist">{album.artist}</div>
                            <div className="song-count">{album.songs.length} songs </div>
                        </div>
                    </Link>
                </Album>
            ))}
        </Container>
    )
}
export default Library;