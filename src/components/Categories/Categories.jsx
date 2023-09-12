import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategoryUseId } from '../../redux/slices/filtersSlice';
import './Categories.scss';

export default function Categories() {
  const categoriesUse = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry'];
  const categoriesList = [
    { name: 'All', categoriesProperty: 'All' },
    { name: 'Art', categoriesProperty: 'Art' },
    { name: 'Biography', categoriesProperty: 'Biography' },
    { name: 'Computers', categoriesProperty: 'Computers' },
    { name: 'History', categoriesProperty: 'History' },
    { name: 'Medical', categoriesProperty: 'Medical' },
    { name: 'Poetry', categoriesProperty: 'Poetry' },
  ];

  const dispatch = useDispatch();
  const { selectedCategoryUseId } = useSelector((state) => state.filters);

  return (
    <div className="categories">
      <div className="categories__header">
        {/* <h1 className="categories__title">Назначение</h1> */}
      </div>
      <div>
        <ul className="categories__list categories__listType">
          {categoriesList.map((obj, index) => (
            <li
              key={index}
              onClick={() => {
                dispatch(setSelectedCategoryUseId(obj));
              }}
              className={
                selectedCategoryUseId.categoriesProperty === obj.categoriesProperty
                  ? 'categories__item categories__item_active'
                  : 'categories__item'
              }>
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
