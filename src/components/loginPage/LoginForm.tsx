import { Link } from "react-router-dom";
import Styles from "../../styles/loginPage/loginForm.module.css";
export interface FormProps {
  emailOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  passwordOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  loginOnClickHandler?: (e: React.FormEvent<HTMLButtonElement>) => void;
  emailValue: string;
  passwordValue: string;
}

const LoginForm = (props: FormProps) => {
  return (
    <form className={Styles.form}>
      <input
        className={Styles.inputs}
        type="text"
        name="email"
        id="email"
        placeholder="Email or First name"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
        autoComplete="off"
      />
      <input
        className={Styles.inputs}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
        autoComplete="off"
      />
      <button
        className={Styles.loginButton}
        onClick={props.loginOnClickHandler}
      >
        Log in
      </button>
      <a className={Styles.forgottenPass} href="www.youtube.com">
        Forgotten password?
      </a>
      <div className={Styles.thinline}></div>
      <button className={Styles.createAccountButton}>
        <Link to="/sign-up">Create new account</Link>
      </button>
    </form>
  );
};
export default LoginForm;
