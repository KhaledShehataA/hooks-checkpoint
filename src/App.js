import React, { useState } from 'react';
import MoviesList from './Components/MoviesList';
import { moviesList } from './util/factory';
function App() {
	const [movieList, setMovieList] = useState(moviesList);
	const [searchWord, setSearchWord] = useState('');
	const [ratingSearch, setRatingSearch] = useState(0);

	return (
		<div className='container'>
			<MoviesList
				moviesArray={
					searchWord
						? movieList.filter((movie) =>
								movie.title.toLowerCase().includes(searchWord.toLocaleLowerCase)
						  )
						: ratingSearch > 1
						? movieList.filter((movie) => movie.rate >= ratingSearch)
						: movieList
				}
			/>
		</div>
	);
}

export default App;
