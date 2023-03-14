import { FriendsList } from "./friendsList/FriendsList";
import { NavBar } from "./navBar/NavBar";
import styles from "../../styles/homePage/homePage.module.css";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <FriendsList />
      </div>
    </div>
  );
};
export default Home;
