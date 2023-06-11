import PropTypes from 'prop-types';
import { InputGroup, Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';

const filtrId = nanoid();
export const Filter = ({ value, onChange }) => {
  return (
    <InputGroup>
      <Label htmlFor={filtrId}>Пошук контактів за іменем</Label>
      <Input type="text" name={value} onChange={onChange} id={filtrId} />
    </InputGroup>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
