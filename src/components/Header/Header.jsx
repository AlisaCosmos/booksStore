import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__inner container__row">
        <div className="header__logo">
          <Link to="/">
            <div className="header__logo_wrapper">
              <div className="header__logo__img">
                <AutoStoriesRoundedIcon />
              </div>
              <div className="header__logo__text">
                <span className="header__logo_textBolb">Books </span>store
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
