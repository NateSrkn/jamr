import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './styles/main.scss'
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

const App = () => {
  return (
    <div className="App">
      <header>
        <section>
          <h2>
              <Link to='/'>
              Jamr
              </Link>
          </h2>
          <nav>
            <ol>
              <li>
                <Link to='/library'>Library</Link>
              </li>
            </ol>
          </nav>
        </section>
      </header>
      <main>
        <section>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </Switch>
        </section>
      </main>
    </div>
  )
}

export default App;