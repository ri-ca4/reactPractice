import { createContext } from 'react';
import './App.css';
import MovieList from './components/movieList';
import Search from './components/search';


function App() {
  return (
    <div>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
