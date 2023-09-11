import { Link } from 'react-router-dom';
import './ResultsItem.scss';

export default function ResultsItem({ data: { volumeInfo } }) {
  return (
    <div className="resultsItem">
      <div className="resultsItem__inner">
        <Link className="resultsItem__img_inner resultsItem__inner_col">
          <div className="resultsItem__img">
            <img
              src={`${volumeInfo.imageLinks.smallThumbnail}`}
              alt={`img books ${volumeInfo.title}`}
            />
          </div>
        </Link>

        <div className="resultsItem__desc resultsItem__inner_col ">
          <div className="resultsItem__title">{volumeInfo.title} </div>
          <div className="resultsItem__authors">{volumeInfo.authors}</div>
          <div className="resultsItem__categories">{volumeInfo.categories}</div>
          <div className="resultsItem__publisher">{volumeInfo.publisher}</div>
          <div className="resultsItem__description">{volumeInfo.description}</div>
        </div>
      </div>
    </div>
  );
}
