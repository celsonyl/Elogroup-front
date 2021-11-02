import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./index.module.css";

export function LeadPanel() {
  const history = useHistory();
  const [leads, setLeads] = useLocalStorage("leads", []);
  const moveToNextCol = (value, col) => {
    const row = leads.find((l) => l.name === value);
    const index = leads.indexOf((l) => l.name === value);
    if (row) {
      switch (col) {
        case "col1":
          row.table = { col2: value };
          break;
        case "col2":
        default:
          row.table = { col3: value };
          break;
      }

      const newLeads = leads;
      newLeads[index] = row;
      setLeads([...newLeads]);
    }
  };

  return (
    <div className={styles.container}>
      <Header title="Painel de Leads" />
      <main>
        <div className={styles.btnBox}>
          <Button
            text="Novo Lead (+)"
            type="button"
            onClick={() => {
              history.push("/create-lead");
            }}
          />
        </div>
        <Table
          columns={[
            { Header: "Cliente em Potencial", accessor: "col1" },
            { Header: "Dados Confirmados", accessor: "col2" },
            { Header: "Reunião Agendada", accessor: "col3" },
          ]}
          data={leads?.map((l) => l.table) || []}
          moveToNextCol={moveToNextCol}
        />
      </main>
    </div>
  );
}
