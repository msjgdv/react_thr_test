import React,  { Component } from 'react';
import {Link} from "react-router-dom";

class menu extends Component{

    render(){
        return(
           <nav className="navbar">
               <link to='/sampletem' className="nav-logo" onClick={() => setOpen(false)}>Logo</link>
               <ul className={open ? 'nav-links active' : 'nav-links'}>
                   <li className="nav-item">
                       <Link to='/sampletem' className="nav-link" onClick={() => setOpen(false)}>
                           sampletemplate
                       </Link>
                   </li>





               </ul>





           </nav>
        );
    }

}

export default menu;