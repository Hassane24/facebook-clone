import { FormProps } from "../loginPage/LoginForm";
import styles from "../../styles/signupPage/signupForm.module.css";

interface SignupFormProps extends FormProps {
  firstNameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  surnameOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  signUpOnClickHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
  profilePicOnChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  firstNameValue: string;
  surnameValue: string;
}

const SignupForm = (props: SignupFormProps) => (
  <form className={styles.form}>
    <div className={styles.newAccountMessage}>
      <h2>Create a new account</h2>
      <div>It's quick and easy.</div>
    </div>
    <div className={styles.inputsContainer}>
      <div className={styles.firstNameSurnameContainer}>
        <input
          className={styles.inputs}
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First name"
          value={props.firstNameValue}
          onChange={props.firstNameOnChangeHandler}
          required
        />
        <input
          className={styles.inputs}
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          value={props.surnameValue}
          onChange={props.surnameOnChangeHandler}
          required
        />
      </div>
      <input
        className={styles.inputs}
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        value={props.emailValue}
        onChange={props.emailOnChangeHandler}
        required
      />
      <input
        className={styles.inputs}
        type="password"
        name="password"
        id="password"
        placeholder="New password"
        value={props.passwordValue}
        onChange={props.passwordOnChangeHandler}
        required
      />
      <input
        className={styles.profilePic}
        type="file"
        name="profile-pic"
        id="profile-pic"
        accept="image/*"
        onChange={props.profilePicOnChangeHandler}
      />
    </div>
    <p className={styles.tos}>
      People who use our service may have uploaded your contact information to
      Facebook.{" "}
      <a
        href="/help/637205020878504"
        id="non-users-notice-link"
        target="_blank"
        rel="nofollow"
      >
        Learn more
      </a>
      .
    </p>
    <p className={styles.tos}>
      By clicking Sign Up, you agree to our
      <a
        href="/legal/terms/update"
        id="terms-link"
        target="_blank"
        rel="nofollow"
      >
        Terms
      </a>
      ,{" "}
      <a
        href="/about/privacy/update"
        id="privacy-link"
        target="_blank"
        rel="nofollow"
      >
        Privacy Policy
      </a>
      and
      <a
        href="/policies/cookies/"
        id="cookie-use-link"
        target="_blank"
        rel="nofollow"
      >
        Cookies Policy
      </a>
      . You may receive SMS notifications from us and can opt out at any time.
    </p>
    <button
      className={styles.signupButton}
      onClick={props.signUpOnClickHandler}
    >
      Sign Up
    </button>
    <a className={styles.redirectBtn} href="/login">
      Already have an account?
    </a>
  </form>
);
export default SignupForm;
