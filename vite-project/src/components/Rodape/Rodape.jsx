import style from './Rodape.module.css';

const Rodape = (props) => {

    const {nome} = props;
    const data = (new Date()).getFullYear();
    return (
        <div className={style.Rodape}>
            React Básico - {data} {nome}
        </div>
    );
};

export { Rodape };