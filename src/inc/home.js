import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Circle from "../circle2.svg";

class home extends Component{

    render(){
        return(
            <div className='App'>
                <h3> 네가지 중 한가지 선택 사항</h3>
                <Link to='/choosekid/kidclassA'> <img src={Circle} className="circle" alt="circle"/> </Link>
              <Link to='/choosekid/kidclassB'> <img src={Circle} className="circle" alt="circle"/> </Link>
              <Link to='/choosekid/kidclassC'> <img src={Circle} className="circle" alt="circle"/> </Link>
              <Link to='/choosekid/kidclassD'> <img src={Circle} className="circle" alt="circle"/> </Link>
            </div>
        );
    }

}

export default home;