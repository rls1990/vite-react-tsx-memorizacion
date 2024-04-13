/* eslint-disable react-refresh/only-export-components */
import { memo, useMemo } from "react";

interface ContadorHijoProp {
  contador: number;
  sumar: () => void;
  restar: () => void;
}

const ContadorHijo = ({ contador, sumar, restar }: ContadorHijoProp) => {
  //console.log("Hijo del COntador se renderiza");
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
