import { useRef, useState } from "react";
import TextBox from "../../components/Input";
import Button from "../../components/Button";
import { register } from "../../service/register";
import "./index.css";

function Register() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setConfirmErrorPassword] = useState(false);
  const [errorOnRegister, setErrorOnRegister] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorPassword && !errorConfirmPassword) {
      register({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
        .then((r) => { })
        .catch((c) => {
          if (c.response.status === 422) {
            setErrorOnRegister("Usuário já existe");
            return;
          }
          setErrorOnRegister("Erro ao cadastrar");
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
    <main className="main">
      <div className="bodyForm">
        <h3 className="title">
          <span>ELO</span>
          <span className="bolder">GROUP</span>
        </h3>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
        {errorOnRegister && <span className="msgError">{errorOnRegister}</span>}
      </div>
    </main>
  );
}

export default Register;
