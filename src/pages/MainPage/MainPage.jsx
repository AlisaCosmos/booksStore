import { fetchBooks, setBooks } from '../../redux/slices/booksSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ResultsShow from '../../components/ResultsShow/ResultsShow';
import ScreenFirst from '../../components/ScreenFirst/ScreenFirst';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import './MainPage.scss';

export default function MainPage({ refapp }) {
  const dispatch = useDispatch();

  const { selectedCategoryUseId } = useSelector((state) => state.filters);
  const apiKey = 'AIzaSyDNYa1yLjiOFlS3xc2rr9SiWXhPJhjpWqg';
  //функция получает книги и сохраняет
  const getBooks = async () => {
    //ХОТИМ ДОЖТАТЬСЯ ОТВЕТА
    //дай данные и сохрани первый запрос

    await dispatch(
      fetchBooks({
        apiKey,
        selectedCategoryUseId,
      }),
    );
  };

  useEffect(() => {
    getBooks();
  }, [selectedCategoryUseId]);

  return (
    <div className="mainPage container__row">
      <ScreenFirst refapp={refapp} />
      <div className="mainPage__filtre">
        <Categories />
        <Sort />
      </div>

      <ResultsShow refapp={refapp} />
    </div>
  );
}
