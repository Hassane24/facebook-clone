import { FriendsList } from "./friendsList/FriendsList";
import { NavBar } from "./navBar/NavBar";
import styles from "../../styles/homePage/homePage.module.css";
import { SideBar } from "./sideBar/SideBar";
import { Main } from "./main/Main";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <SideBar />
        <Main />
        <FriendsList />
      </div>
    </div>
  );
};
export default Home;
