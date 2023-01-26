import { useState } from "react";
import Header from "./Header";
import SignupForm from "./SignupForm";
import { signupUser } from "../../utils/signupUser";

const SignupPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [image, setImage] = useState<any>();

  const firstNameOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setFirstNameValue((e.target as HTMLInputElement).value);

  const surnameOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setSurnameValue((e.target as HTMLInputElement).value);

  const emailOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setEmailValue((e.target as HTMLInputElement).value);

  const passwordOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setPasswordValue((e.target as HTMLInputElement).value);

  const signUpOnClickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!passwordValue || !emailValue || !firstNameValue || !surnameValue)
      return;
    signupUser(passwordValue, emailValue, firstNameValue, surnameValue, image);
  };

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
        signUpOnClickHandler={signUpOnClickHandler}
        profilePicOnChangeHandler={(e) => {
          const element = e.target as HTMLInputElement;
          if (element.files) setImage(element.files[0]);
        }}
      />
    </div>
  );
};
export default SignupPage;
