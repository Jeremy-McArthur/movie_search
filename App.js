import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from './Movies';
import Ratings from './Ratings/ratings';
import Moment from 'react-moment';
import { IoMdFilm } from 'react-icons/io';

const App = () => {

  const APP_KEY = 'f8b9e5ed496967ac2a0a6b96c0c540e8';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Star Wars');

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}`);
    const data = await response.json();

    setMovies(data.results);
  };// End getMovies
  
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1 className="site-title">THE MOVIES</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="movies">
        {movies.map(movie => (
          <Movie 
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            rating={<Ratings
              rating={movie.vote_average/2}
              widgetDimensions="30px"
            >
              <Ratings.Widget widgetRatedColor="gold" />
              <Ratings.Widget widgetRatedColor="gold" />
              <Ratings.Widget widgetRatedColor="gold" />
              <Ratings.Widget widgetRatedColor="gold" />
              <Ratings.Widget widgetRatedColor="gold" />
            </Ratings>}
            release={<Moment format="MM/DD/YYYY">{movie.release}</Moment>}
            summary={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
