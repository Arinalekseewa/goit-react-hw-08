import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.searchName}>
      Search contacts by name:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default SearchBox;