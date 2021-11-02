import React, { useEffect, useRef } from "react";
import { Header } from "../../components/Header";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TextBox from "../../components/Input";
import styles from "./index.module.css";
import Button from "../../components/Button";
import { CheckboxTable } from "../../components/CheckboxTable";
import { createLead } from "../../service/createLead";

export function CreateLead() {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const [leads, setLeads] = useLocalStorage("leads", []);
  const showSuccess = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      table: { col1: nameRef.current.value },
    };

    createLead({
      email: data.email,
      name: data.name,
      phone: data.phone,
    }).finally(() => {
      setLeads([...leads, data]);
    });
    showSuccess.current = true;
  };

  useEffect(() => {
    if (showSuccess.current) {
      setTimeout(() => {
        showSuccess.current = false;
      }, 2000);
    }
  });

  return (
    <div className={styles.container}>
      <Header title="Painel de Leads" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <main className={styles.main}>
          <div className={styles.column}>
            <TextBox
              ref={nameRef}
              inputName="Nome"
              id="name"
              type="text"
              required
            />
            <TextBox
              ref={phoneRef}
              inputName="Telefone"
              id="phone"
              type="tel"
              required
            />
            <TextBox
              ref={emailRef}
              inputName="Email"
              id="email"
              type="email"
              required
            />
          </div>
          <div className={styles.column}>
            <CheckboxTable />
            <Button text="Salvar" type="submit" />
          </div>
        </main>
      </form>
      {showSuccess.current && (
        <span className={styles.msgSuccess}>Lead incluída com sucesso </span>
      )}
    </div>
  );
}
