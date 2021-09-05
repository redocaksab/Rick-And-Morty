import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import CharactersContainer from './CharactersPage/CharactersContainer';
import EpisodesContainer from './EpisodesPage/EpisodesContainer';
import LocationsContainer from './LocationPage/LocationContainer';
import WatchListContainer from './MyWatchListPage/WatchListContainer';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="app-wrapper">
        <Navbar />
        <Route  path="/characters" component={CharactersContainer}/>
        <Route  path="/episodes" component={EpisodesContainer}/>
        <Route path="/locations" component={LocationsContainer}/>
        <Route path="/watchList" component={WatchListContainer}/>
      </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
