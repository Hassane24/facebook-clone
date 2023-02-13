import WelcomeMessage from "./WelcomeMessage";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();

  const checkInputValuesAgainstDB = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const usersGottenFromDB: DocumentData[] = [];
    const users = await getDocs(collection(db, "users"));
    users.forEach((user) => usersGottenFromDB.push(user.data()));
    usersGottenFromDB.forEach((user) => {
      if (emailValue === user.firstName && passwordValue === user.password) {
        navigate("/home");
        localStorage.setItem("UserID", user.userID);
      } else return;
    });
  };

  return (
    <>
      <WelcomeMessage></WelcomeMessage>
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        emailOnChangeHandler={(e) => {
          const element = e.target as HTMLInputElement;
          setEmailValue(element.value);
        }}
        passwordOnChangeHandler={(e) => {
          const element = e.target as HTMLInputElement;
          setPasswordValue(element.value);
        }}
        loginOnClickHandler={checkInputValuesAgainstDB}
      ></LoginForm>
    </>
  );
};

export default LoginPage;
