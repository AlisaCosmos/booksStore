import './ResultsShow.scss';
import ResultsListItems from '../ResultsListItems/ResultsListItems';
import { useSelector } from 'react-redux';

export default function ResultsShow() {
  const { status } = useSelector((state) => state.books);

  return (
    <div className="resultsShow">
      <h2 className="resultsShow__title">Все книги</h2>
      {status === 'loading' ? <div>loading</div> : <ResultsListItems />}
    </div>
  );
}
