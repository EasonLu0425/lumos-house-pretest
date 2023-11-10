import styles from "./Login.module.css";
import { useState } from "react";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [nullAccount, setNullAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [nullPwd, setNullPwd] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleAccountInput = (e) => {
    const value = e.target.value;
    setAccount(value);
  };
  const handlePwdInput = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!account) {
       setNullAccount(true);
    }
     if (!password) {
      return setNullPwd(true);
    }

    if (account && password) {
      setNullAccount(false)
      setNullPwd(false)
      setIsSubmit(true)
    }
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.accountContainer}>
            <div className={styles.label}>Username</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Please enter username"
              onChange={handleAccountInput}
              value={account}
            ></input>
            {nullAccount && (
              <p className={styles.null}>Please enter username</p>
            )}
          </div>
          <div className={styles.passwordContainer}>
            <div className={styles.label}>Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Please enter password"
              onChange={handlePwdInput}
              value={password}
            ></input>
            {nullPwd && (
              <p className={styles.null}>Please enter password</p>
            )}
          </div>
          <button className={styles.loginBtn} type="submit" disabled={isSubmit}>
            Submit
          </button>
          {isSubmit && (<p> success</p>)}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
