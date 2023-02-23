import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import Settings from "./Settings";
const Home = () => {
  return (
    <div>
      <Settings></Settings>
      <Navigation />
      <SearchBar />
    </div>
  );
};
export default Home;
