import { FormCriarTarefas, ListaTarefas } from "../../components";
import style from "./Inicial.module.css";


const Inicial = () => {

  return (
    <div className={style.inicial}>
      <FormCriarTarefas />
      <ListaTarefas />
    </div>
  );
};

export { Inicial };
