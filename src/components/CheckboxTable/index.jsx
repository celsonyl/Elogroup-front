import React, { useState } from "react";
import styles from "./index.module.css";

export function CheckboxTable() {
  const [selectedItens, setSelectedItens] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const itens = ["RPA", "Produto Digital", "Analytics", "BPM"];

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={`${styles.cell} ${styles.th}`}>
            <input
              type="checkbox"
              onChange={(e) => {
                setAllSelected(e.target.checked);
                if (e.target.checked) {
                  setSelectedItens([...itens]);
                }
              }}
              checked={allSelected}
            />
          </th>
          <th className={`${styles.cell} ${styles.th}`}></th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {itens.map((row) => {
          return (
            <tr className={styles.tr} key={`tr-${row}`}>
              <td>
                <input
                  type="checkbox"
                  value={row}
                  checked={selectedItens.includes(row) || allSelected}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItens([...selectedItens, row]);
                      return;
                    }
                    setSelectedItens([
                      ...selectedItens.filter((item) => item !== row),
                    ]);
                    setAllSelected(false);
                  }}
                />
              </td>
              <td className={`${styles.cell} ${styles.td}`}>{row}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
