import { Link } from "react-router-dom";
export interface FormProps {
  emailOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  passwordOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  loginOnClickHandler?: (e: React.FormEvent<HTMLButtonElement>) => void;
  emailValue: string;
  passwordValue: string;
}

const LoginForm = (props: FormProps) => {
  return (
    <form action="">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email or First name"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
        autoComplete="off"
      />
      <button onClick={props.loginOnClickHandler}>Log in</button>
      <a href="www.youtube.com">Forgotten password?</a>
      <div></div>
      <button>
        <Link to="/sign-up">Create new account</Link>
      </button>
    </form>
  );
};
export default LoginForm;
