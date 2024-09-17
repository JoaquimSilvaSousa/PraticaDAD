import styles from './BarraPesquisa.module.css'
import lupa from '../../assets/lupa.svg'

export default function BarraPesquisa() {
    return <div className={styles.conteiner}>
                <img src={lupa} alt="" />
                <input placeholder="Meat" type="text" name="" id="" className={styles.input}/>
            </div>
}

