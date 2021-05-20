import React, { useState } from 'react';
import MoviesList from './Components/MoviesList';
import SearchBar from './Components/SearchBar';

import { BrowserRouter as Router } from 'react-router-dom';

import { moviesList } from './util/factory';

function App() {
	const [movieList, setMovieList] = useState(moviesList);
	const [searchWord, setSearchWord] = useState('');

	const handleSearch = (e) => setSearchWord(e.target.value);

	return (
		<div className='container'>
			<Router>
				<div>
					<SearchBar handleSearch={handleSearch} />
					<MoviesList
						moviesArray={
							searchWord
								? movieList.filter((movie) =>
										movie.title.toLowerCase().includes(searchWord.toLowerCase())
								  )
								: movieList
						}
					/>
				</div>
			</Router>
		</div>
	);
}

export default App;
