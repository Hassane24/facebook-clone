import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";

export const NavBar = () => {
  return (
    <div>
      <SearchBar />
      <Navigation />
      <Settings />
    </div>
  );
};
