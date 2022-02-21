import './css/style.css';
import { Route, NavLink} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Gallery from './components/Gallery';
import Youtube from './components/Youtube';
import Board from './components/Board';

function App() {
  const activeStyle = {color: "salmon", fontSize: "18px", fontWeight: "bold"}
  return (
    <div className="App">
      <header>
        <h1>
          <NavLink exact to="/" activeStyle={activeStyle}>J-STUDIO</NavLink>
        </h1>

        <ul id="gnb"> 
          <li>
            <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
          </li>
          <li>
            <NavLink exact to="/gallery" activeStyle={activeStyle}>Gallery</NavLink>
          </li>
          <li>
            <NavLink exact to="/youtube" activeStyle={activeStyle}>Youtube</NavLink>
          </li>
          <li>
            <NavLink exact to="/board" activeStyle={activeStyle}>Board</NavLink>
          </li>
        </ul>
      </header>

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/board" component={Board}></Route>

    </div>
  );
}

export default App;
