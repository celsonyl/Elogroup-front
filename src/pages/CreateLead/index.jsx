import React, { useRef } from "react";
import { Header } from "../../components/Header";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TextBox from "../../components/Input";
import styles from "./index.module.css";
import Button from "../../components/Button";
import { CheckboxTable } from "../../components/CheckboxTable";

export function CreateLead() {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const [leads, setLeads] = useLocalStorage("leads", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      table: { col1: nameRef.current.value },
    };

    setLeads([...leads, data]);
  };

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
            {/* <Table
              columns={[
                { Header: "", accessor: "col1" },
                { Header: "", accessor: "col2" },
              ]}
              data={[
                {
                  col1: "checkbox",
                  col2: "RPA",
                },
                {
                  col1: "checkbox",
                  col2: "Produto Digital",
                },
                {
                  col1: "checkbox",
                  col2: "Analytics",
                },
                {
                  col1: "checkbox",
                  col2: "BPM",
                },
              ]}
            /> */}
            <CheckboxTable />
            <Button text="Salvar" type="submit" />
          </div>
        </main>
      </form>
    </div>
  );
}
