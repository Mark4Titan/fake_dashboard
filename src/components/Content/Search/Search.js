import Ico from "../../Ico/Ico";
import { SearchBox, SearchIco, SearchIcoClear, SearchInput } from "./Search.styled";

const Search = ({ stateSearch, setStateSearch }) => {
  const ValueIn = (value) => {
    const validator = value === " " ? "" : value;
    setStateSearch(validator);
  };
  const Clear = () => {
    setStateSearch("");
  };

  return (
    <SearchBox>
      <SearchInput
        type="text"
        name="input"
        placeholder="Search"
        onChange={(e) => ValueIn(e.target.value)}
        value={stateSearch}
      />
      <SearchIco>
        {stateSearch.length === 0 && <Ico Name={"Search"} />}
        {stateSearch.length !== 0 && (
          <SearchIcoClear onClick={() => Clear()}>
            <Ico Name={"Clear"} />
          </SearchIcoClear>
        )}
      </SearchIco>
    </SearchBox>
  );
};
export default Search;
