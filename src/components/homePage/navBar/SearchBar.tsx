import { Logo, SearchIcon } from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/searchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Logo />
      <label>
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </label>
    </div>
  );
};
