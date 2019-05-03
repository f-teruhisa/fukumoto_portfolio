import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from './About';
import Works from "./Works";
import Carrier from './Carrier';
import Skill from './Skill'
import Certification from './Certification'
import Links from './Link'

const Contents = () => (
  <BrowserRouter>
    <React.Fragment>
      <div id="navi">
        <div id="navi-box">
          <Link to="/">About</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/works">Works</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/certification">Certification</Link>
          <Link to="/links">Links</Link>
        </div>
      </div>
      <div id="contents">
        <Route exact path='/' component={About} />
        <Route exact path='/carrier' component={Carrier} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/skill' component={Skill} />
        <Route exact path='/certification' component={Certification} />
        <Route exact path='/links' component={Links} />
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default Contents;
