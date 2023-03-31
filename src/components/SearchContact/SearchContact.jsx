import { Label, Input } from './SearchContact.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(setFilter(e.target.value));
  
  return (
    <>
      <Label>
        Find contacts by name
        <Input onChange={handleFilterChange} />
      </Label>
    </>
  );
};
