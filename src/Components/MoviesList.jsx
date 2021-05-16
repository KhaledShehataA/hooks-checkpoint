import MovieCard from './MovieCard';

const MoviesList = ({ moviesArray }) => {
	return (
		<div className='row mt-2'>
			{moviesArray.map((movie, key) => {
				<MovieCard movie={movie} key={key} />;
			})}
		</div>
	);
};

export default MoviesList;
