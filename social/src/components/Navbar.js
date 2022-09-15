import { Link } from "react-router-dom";
// import "App.css";

export default function Navbar(){
    return (
        <>
    <nav className="nav-bar">
        <div className="box-1">
            <img src="../../images/welp2.jpg" 
                 alt ="Dine In Logo" 
                 width="90px"
                 height="90px"></img>
       </div>

        <div className="box-3">
            <h1>SOCIAL-POINT</h1>
        </div>

       <div className="box-2">
        <ul>
            <Link to="/" >Restaurants</Link>
            <Link to="/Friends" >Friends</Link>
            <Link to="/Contact" >Contact Us</Link>
        </ul>
        </div>
    </nav>
    </>
    )
}