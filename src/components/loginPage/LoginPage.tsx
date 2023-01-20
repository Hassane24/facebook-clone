import WelcomeMessage from "./WelcomeMessage";
import LoginForm from "./LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

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
      ></LoginForm>
    </>
  );
};

export default LoginPage;
