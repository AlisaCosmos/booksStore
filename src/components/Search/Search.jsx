import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { setSearchValue } from '../../redux/slices/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/slices/booksSlice';
import './Search.scss';

export default function Search() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filters);
  const apiKey = 'AIzaSyDNYa1yLjiOFlS3xc2rr9SiWXhPJhjpWqg';
  //функция получает книги и сохраняет
  const getBooks = async () => {
    //ХОТИМ ДОЖТАТЬСЯ ОТВЕТА
    //дай данные и сохрани первый запрос

    await dispatch(
      fetchBooks({
        apiKey,
        searchValue,
      }),
    );
  };
  // get Books onClikc button
  const handelSearch = async (e) => {
    e.preventDefault();
    //запрос на бек
    getBooks();
  };
  //
  const onChangeInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  };
  //
  const onClickClear = () => {
    dispatch(setSearchValue(''));
  };

  return (
    <div className="search">
      <form onSubmit={handelSearch}>
        <SearchOutlinedIcon className="search__icon" />
        <input
          className="search__input"
          placeholder="Какую книгу вы ищете..."
          value={searchValue}
          onChange={onChangeInput}
        />
        {searchValue && (
          <CloseOutlinedIcon className="search__icon__close" onClick={onClickClear} />
        )}
        <input onClick={handelSearch} type="submit" className="search__btn" value="Search"></input>
      </form>
    </div>
  );
}
