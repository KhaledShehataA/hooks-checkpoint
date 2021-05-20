import { Input } from 'reactstrap';

const SearchBar = ({ handleSearch }) => {
	return (
		<div className='row m-2'>
			<div className='col-md-12'>
				<Input
					type='text'
					placeholder='enter the title you search...'
					onChange={handleSearch}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
