import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

 const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        console.warn("Prachi");
        localStorage.removeItem('user');
        navigate('/signup');
    }
     return(
         <div>
         <img src="/prachi.jpeg" alt="prachi" className="logo"/>
         {auth?
             <ul className="nav-ul">
                 {/* <li>{ auth? <Link to="/signup" onClick={logout} >Logout</Link> : <Link to="/signup">Sign Up</Link>}</li> */}
                 <li><Link to="/profile">Profile</Link> </li>
                 <li><Link to="/">Products</Link> </li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
                    
             </ul>
             :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
         }
         </div>
     )
 }


 export default Nav;