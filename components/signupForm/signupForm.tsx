import styles from "./signupForm.module.css";
import Link from "next/link";

const SignupForm = () => {
    return (
        <form className={styles.form}>
            <h1>Sign Up</h1>
            <p>
                <Link href="/signin">{"Already have an account? "}
                    <b>
                        Sign in here
                    </b>
                </Link>
            </p>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" />
            <button className={styles.submitButton}>Sign Up</button>
        </form>
    );
};

export default SignupForm;
