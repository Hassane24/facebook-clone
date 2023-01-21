import { useState } from "react";
import Header from "./Header";
import SignupForm from "./SignupForm";
import { signUp } from "../../firebase/firebase";

const SignupPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");

  const firstNameOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setFirstNameValue((e.target as HTMLInputElement).value);

  const surnameOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setSurnameValue((e.target as HTMLInputElement).value);

  const emailOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setEmailValue((e.target as HTMLInputElement).value);

  const passwordOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setPasswordValue((e.target as HTMLInputElement).value);

  return (
    <div>
      <Header />
      <SignupForm
        firstNameValue={firstNameValue}
        surnameValue={surnameValue}
        emailValue={emailValue}
        passwordValue={passwordValue}
        firstNameOnChangeHandler={firstNameOnChangeHandler}
        surnameOnChangeHandler={surnameOnChangeHandler}
        emailOnChangeHandler={emailOnChangeHandler}
        passwordOnChangeHandler={passwordOnChangeHandler}
        signUpOnClickHandler={(e) => {
          e.preventDefault();
          signUp(emailValue, passwordValue);
        }}
      />
    </div>
  );
};
export default SignupPage;
