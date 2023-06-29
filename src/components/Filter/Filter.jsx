import PropTypes from "prop-types";

export const Filter = ({ setFilterToState }) => {
  
  const setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <br />
      <input onChange={setFilterValue}></input>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};