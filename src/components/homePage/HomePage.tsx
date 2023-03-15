import { FriendsList } from "./friendsList/FriendsList";
import { NavBar } from "./navBar/NavBar";
import styles from "../../styles/homePage/homePage.module.css";
import { SideBar } from "./sideBar/SideBar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <FriendsList />
        <SideBar />
      </div>
    </div>
  );
};
export default Home;
