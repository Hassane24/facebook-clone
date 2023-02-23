import { Logo, SearchIcon } from "../../utils/svgsFunction";
export const SearchBar = () => {
  return (
    <div>
      <Logo />
      <label>
        <SearchIcon />
        <input type="text" />
      </label>
    </div>
  );
};
