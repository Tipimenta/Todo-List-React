
import style from './ListaTarefasItem.module.css'
import { CampoTexto, Botao, TIPO_BOTAO, Loading } from '../../../components'
import { useAppContext } from '../../../hooks';
import { useState } from 'react';


const ListaTarefasItem = (props) => {
    const {id, nome} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {editarTarefa, removerTarefa, loadingDeletar, loadingEditar} = useAppContext();

const onBlurTarefa = Event => {
    const nomeTarefa = Event.currentTarget.value;

    editarTarefa(id, nomeTarefa);
    setEstaEditando(false)
}

const LoadingEstaEditando = loadingEditar == id;
const LoadingEstaDeletando = loadingDeletar == id;


    return (
        <li className={style.ListaTarefasItem}>
            {(LoadingEstaEditando || estaEditando) && 
              ( 
                 <CampoTexto
                 defaultValue={nome}
                 onBlur={onBlurTarefa}
                 autoFocus
                  />
              )}
            
            {!LoadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {LoadingEstaEditando && (
                <Loading />
                )}
            <Botao 
            texto={LoadingEstaDeletando ? <Loading /> : "-"}
            tipo={TIPO_BOTAO.SECUNDARIO} 
            onClick={() => removerTarefa(id)}
            />
                </li>
    
    )
}

export { ListaTarefasItem }