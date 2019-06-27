import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/App.css';
import './styles/player-bar.css';
import './styles/song-list.css';
import './styles/album.css';
import './styles/library.css';
import './styles/landing.css';
import './styles/reset.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="logo"><Link to='/'>BLOC JAMS</Link></h1>
          <nav className="left">
            <ul id="navbar">
              <li className="link"><Link to='/library'>Library</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;