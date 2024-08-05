import { useState } from "react";
import { CampoTexto, Botao, Loading } from "../../components";
import style from "./FormCriarTarefas.module.css";
import { useAppContext } from "../../hooks";

const FormCriarTarefas = () => {

  const { adicionarTarefa, loadingCriar } = useAppContext();
  const [ nomeTarefa, setNomeTarefa ] = useState("");


  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa)

    setNomeTarefa("");
  };

  return (
    <form className={style.FormCriarTarefas} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto={loadingCriar ? <Loading />: '+'} />

    </form>
  );
};

export { FormCriarTarefas };
