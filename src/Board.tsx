import styles from "./Board.module.css";

interface Props {
  stateMatrix: Array<Array<boolean>>;
}

export function Board({ stateMatrix }: Props) {
  return (
    <table className={styles.table}>
      <tbody>
        {stateMatrix.map((row, index) => (
          <tr key={index} className={styles.tr}>
            {row.map((col, index) => {
              let classes = styles.td;

              if (col === true) {
                classes += " " + styles.active;
              }

              return <td key={index} className={classes}></td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
