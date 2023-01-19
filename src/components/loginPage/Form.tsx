interface FormProps {
  emailOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  passwordOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordValue: string;
}

const Form = (props: FormProps) => {
  return (
    <form action="">
      <input
        type="text"
        name="email"
        id=""
        placeholder="Email or Phone Number"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
      />
      <input
        type="text"
        name="password"
        id=""
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
      />
      <button>Log in</button>
      <a href="www.youtube.com">Forgotten password?</a>
      <div></div>
      <button>Create new account</button>
    </form>
  );
};
export default Form;
