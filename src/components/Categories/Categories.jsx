import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategoryUseId } from '../../redux/slices/filtersSlice';
import './Categories.scss';

export default function Categories() {
  const categoriesUse = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry'];
  const dispatch = useDispatch();
  const { selectedCategoryUseId } = useSelector((state) => state.filters);

  return (
    <div className="categories">
      <div className="categories__header">
        {/* <h1 className="categories__title">Назначение</h1> */}
      </div>
      <div>
        <ul className="categories__list categories__listType">
          {categoriesUse.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                dispatch(setSelectedCategoryUseId(index));
              }}
              className={
                selectedCategoryUseId === index
                  ? 'categories__item categories__item_active'
                  : 'categories__item'
              }>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
