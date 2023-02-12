import { FormProps } from "../loginPage/LoginForm";

interface SignupFormProps extends FormProps {
  firstNameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  surnameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  signUpOnClickHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
  profilePicOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  firstNameValue: string;
  surnameValue: string;
}

const SignupForm = (props: SignupFormProps) => (
  <form>
    <div>
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="First name"
        value={props.firstNameValue}
        onChange={props.firstNameOnChangeHandler}
        required
      />
      <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Surname"
        value={props.surnameValue}
        onChange={props.surnameOnChangeHandler}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="New password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
        required
      />
      <input
        type="file"
        name="profile-pic"
        id="profile-pic"
        accept="image/*"
        onChange={props.profilePicOnChangeHandler}
      />
    </div>
    <button onClick={props.signUpOnClickHandler}>Sign up</button>
  </form>
);
export default SignupForm;
