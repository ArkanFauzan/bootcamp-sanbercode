import React from 'react';
import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useRouteMatch,
        useParams
} from "react-router-dom"

function App() {

  return(
    <Router>
      <div className="App">
        <div className="App-header">
          <header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/article">Article</Link></li>
            </ul>
          </header>
        </div>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/article">
            <Article/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

function Home() {
  return(
    <div>
      <h1>Ini Home</h1>
    </div>
  )
}

function About() {
  return(
    <div>
      <h1>Ini About</h1>
    </div>
  )
}

function Article() {
  const match = useRouteMatch()
  return(
    <div>
      <h1>Ini Article</h1>

      <Switch>

        <Route exact path={match.url}>
          <div style={{color:"white"}}>
            <h2>Silahkan pilih article</h2>
            <Link style={{color:"white"}} to={`${match.url}/1`}>Article 1</Link><br/>
            <Link style={{color:"white"}} to={`${match.url}/2`}>Article 2</Link>
          </div>
        </Route>

        <Route path={`${match.url}/:articleId`}>
          <ShowArticle />
        </Route>

      </Switch>
    </div>
  )
}

function ShowArticle() {
  const {articleId} = useParams();
  
  const linkArticle = articleId==1?"2":"1";
  return(
    <>
      <Link style={{color:"white"}} to={`${linkArticle}`}><h4>Menuju article {linkArticle}</h4></Link>
      <p style={{color:"white"}}>Ini Article {articleId}</p>
    </>
  )
}

export default App;