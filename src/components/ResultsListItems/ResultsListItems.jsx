import ResultsItem from '../ResultsItem/ResultsItem';
import './ResultsListItems.scss';

import { useSelector } from 'react-redux';

export default function ResultsListItems() {
  const { books } = useSelector((state) => state.books);
  console.log(books, books);

  return (
    <div className="resultsListItems">
      {books?.map((item, i) => {
        return <ResultsItem key={i} data={item} />;
      })}
    </div>
  );
}
