
import Cards from "../components/Cards"
import { useDispatch, useSelector } from "react-redux"
import { orderFav,filterFav,resetFav } from "../redux/action" 
import '../css/StyleFavorites.css'


export default function Favorites() {
  const dispatch = useDispatch()
  const Favorites = useSelector(state=>state.Favorites)  

 const handelSort=(e)=>{
   dispatch(orderFav(e.target.value))
 }

 const handlefilter=(e)=>{
  dispatch(filterFav(e.target.value))
 }

 const handleReset=()=>{
   dispatch(resetFav())
 }

  return (
    <div>
      <div className="conteiner-selects"> 
      <button className="Reset" onClick={handleReset}>Reset</button>
      <select className="Select" onChange={handlefilter} placeholder="gender">
        {['Male','Female','unknown','Genderless'].map(genero=>(
          <option value={genero}>{genero}</option>))}
      </select>
      <select className="Select"  onChange={handelSort} placeholder="order">
      {['Ascendente','Desendentes'].map(order=>(
        <option value={order}>{order}</option>))}
      </select>
        </div>
        <Cards characters={Favorites}  />
    </div>
  )
}

