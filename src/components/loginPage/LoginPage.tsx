import WelcomeMessage from "./WelcomeMessage";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/loginPage/loginPage.module.css";

const LoginPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();

  const checkInputValuesAgainstDB = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("UserID", user.uid);
        navigate("/home");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className={Styles.container}>
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
    </div>
  );
};

export default LoginPage;
