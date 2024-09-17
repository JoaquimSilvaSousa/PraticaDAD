import styles from './Item.module.css'
import imagem1 from '../../assets/imagem1.svg'
import sacola from '../../assets/Sacola.svg'


const Item = ({nome, medida, preco}) => {
    return <div className={styles.conteiner}>
            <div className={styles.divona}>
                <img src={imagem1} alt="imagem" />
                <div className={styles.info}>
                    <h3>{nome}</h3>
                    <div id={styles.medida}>{medida}</div>
                    <h4>R$ {preco}</h4>
                </div>
                <img className={styles.sacola} src={sacola} alt="sacola" />
            </div>
        </div>
}

export default Item