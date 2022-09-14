import { useContext } from 'react';
import { createContext } from 'react';
import './App.css';
import MovieList from './components/movieList';
import Search from './components/search';
import { GlobalContext } from './GlobalContext';


function App() {
  const {movieList} = useContext(GlobalContext)

  return (
    <div style={{background : movieList && movieList.length > 0 && 'blue'}}>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
