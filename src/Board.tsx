import styles from "./Board.module.css";

interface Props {
  width: number;
  height: number;
}

function generateBoardMatrix(
  width: number,
  height: number
): Array<Array<boolean>> {
  const boardMatrix = [];

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const row = [];

    for (let colIndex = 0; colIndex < width; colIndex++) {
      row.push(false);
    }

    boardMatrix.push(row);
  }

  return boardMatrix;
}

export function Board({ width, height }: Props) {
  const matrix = generateBoardMatrix(width, height);

  return (
    <table className={styles.table}>
      <tbody>
        {matrix.map((row, index) => (
          <tr key={index} className={styles.tr}>
            {row.map((col, index) => (
              <td key={index} className={styles.td}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
