import styles from "./signinForm.module.css";
import Link from "next/link";

const SigninForm = () => {
  return (
    <form className={styles.form}>
      <h1>Sign In</h1>
      <Link href="/signup">
        {"New User?"} <b>Create an account</b>
      </Link>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <div className={styles.passwordOptions}>
        <a href="/forgotpassword">Forgot Password?</a>
      </div>
      <button className={styles.submitButton}>Sign In</button>
    </form>
  );
};

export default SigninForm;
