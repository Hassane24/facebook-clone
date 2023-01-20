import { Link } from "react-router-dom";
interface FormProps {
  emailOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  passwordOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
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
        placeholder="Email or Phone Number"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
        autoComplete="off"
      />
      <input
        type="text"
        name="password"
        id="email"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
        autoComplete="off"
      />
      <button>Log in</button>
      <a href="www.youtube.com">Forgotten password?</a>
      <div></div>
      <button>
        <Link to="/sign-up">Create new account</Link>
      </button>
    </form>
  );
};
export default LoginForm;
