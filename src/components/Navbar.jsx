import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt, BiMoon} from 'react-icons/bi';
import './Navbar.css';


const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate("") 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

navigate(`/search?q=${search}`);
setSearch("");
  };

  return (
<nav id="navbar" >

    <h2>
        <Link to='/'><BiCameraMovie />Movies lib</Link>
    </h2>

   
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque Aqui!" onChange={(e) => setSearch(e.target.value)} 
        value={search}/>
        <button type="submit">
            <BiSearchAlt />
        </button>
    </form>
</nav>  
  )
}

export default Navbar