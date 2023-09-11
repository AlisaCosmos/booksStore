import { fetchBooks, setBooks } from '../../redux/slices/booksSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ResultsShow from '../../components/ResultsShow/ResultsShow';
import ScreenFirst from '../../components/ScreenFirst/ScreenFirst';

export default function MainPage({ refapp }) {
  const dispatch = useDispatch();
  const apiKey = 'AIzaSyDNYa1yLjiOFlS3xc2rr9SiWXhPJhjpWqg';
  //функция получает книги и сохраняет
  const getBooks = async () => {
    //ХОТИМ ДОЖТАТЬСЯ ОТВЕТА
    //дай данные и сохрани первый запрос

    await dispatch(
      fetchBooks({
        apiKey,
      }),
    );
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container__row">
      <ScreenFirst refapp={refapp} />
      <ResultsShow />
    </div>
  );
}
