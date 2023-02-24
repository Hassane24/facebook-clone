import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";
import styles from "../../../styles/homePage/navBar/navBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <Navigation />
      <Settings />
    </div>
  );
};
