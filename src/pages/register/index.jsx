import React, { useRef, useState } from "react";
import TextBox from "../../components/Input";
import Button from "../../components/Button";
import { register } from "../../service/register";
import styles from "./index.module.css";
import { Logo } from "../../components/Logo";
import { useHistory } from "react-router";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Register() {
  const history = useHistory();
  const [users, setUsers] = useLocalStorage("users", []);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setConfirmErrorPassword] = useState(false);
  const [errorOnRegister, setErrorOnRegister] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!errorPassword && !errorConfirmPassword) {
      register({
        username,
        password,
      })
        .then(() => {
          setUsers([...users, username]);
          history.push("/lead-panel");
        })
        .catch((e) => {
          if (e.response?.status === 422) {
            setErrorOnRegister("Usuário já existe");
            return;
          }
        });
    }
  };

  const handlePasswordChanged = () => {
    const password = passwordRef.current.value;
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validRegex = RegExp(regex).test(password);
    setErrorPassword(!validRegex);
  };

  const handlePasswordConfirmationChanged = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    setConfirmErrorPassword(password !== confirmPassword);
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <Logo />
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <TextBox
            ref={usernameRef}
            inputName="Usuário"
            id="Username"
            type="text"
            required
          />
          <TextBox
            ref={passwordRef}
            inputName="Password"
            id="Password"
            type="password"
            onChange={handlePasswordChanged}
            error={errorPassword}
            errorMsg="A senha deve ter uma maiuscula, uma minuscula, um numero, um caracter especial no minimo 8 caracteres"
            required
          />
          <TextBox
            ref={confirmPasswordRef}
            inputName="Confirmação Password"
            id="PasswordConfirmation"
            type="password"
            onChange={handlePasswordConfirmationChanged}
            error={errorConfirmPassword}
            errorMsg="As senha não conferem"
            required
          />
          <Button type="submit" text="Registrar" formButton />
        </form>
        {errorOnRegister && (
          <span className={styles.msgErro}>{errorOnRegister}</span>
        )}
      </div>
    </main>
  );
}

export default Register;
