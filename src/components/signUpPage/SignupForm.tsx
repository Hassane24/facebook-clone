import { FormProps } from "../loginPage/LoginForm";

interface SignupFormProps extends FormProps {
  firstNameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  surnameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  signUpOnClickHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
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
      />
      <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Surname"
        value={props.surnameValue}
        onChange={props.surnameOnChangeHandler}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="New password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
      />
    </div>
    <button onClick={props.signUpOnClickHandler}>Sign up</button>
    <button>Sign up with Google</button>
  </form>
);
export default SignupForm;
