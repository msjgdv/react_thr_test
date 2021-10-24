import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route , Link , Switch} from 'react-router-dom';
import Circle from "./circle2.svg"

import { Home, Test, KidclassA, KidclassC, KidclassD, KidclassB, Choosekid, Sampletem} from './inc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host : '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({ host : res.data.host })
  }

  render() {
      return (
          <div>

              <Switch>
                  <Route path="/test/:data" component={Test}/>
                  <Route path="/test" component={Test}/>
                  <Route path="/choosekid/kidclassA" component={KidclassA}/>
              <Route path="/choosekid/kidclassB" component={KidclassB}/>
              <Route path="/choosekid/kidclassC" component={KidclassC}/>
              <Route path="/choosekid/kidclassD" component={KidclassD}/>
                  <Route path="/choosekid" component={Choosekid}/>
                  <Route path="/" component={Home} exact/>
                  <Route path="/sampletem" component={Sampletem} />



              </Switch>
              <Link to='/'> Home </Link>
              <Link to='/sampletem'> sample </Link>

          </div>
      );
  }
}

export default App;


