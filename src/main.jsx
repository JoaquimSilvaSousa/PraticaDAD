import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BarraPesquisa from './Components/BarraPesquisa/BarraPesquisa.jsx'
import Item from './Components/Item/Item.jsx'

const nome = "Item1"
const medida = "1Kg/Preco"
const preco = "000.000"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BarraPesquisa></BarraPesquisa> */}
    <Item nome={nome} medida={medida} preco={preco}/>
  </StrictMode>,
)
