import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Profile from './Profile';
import Works from "./Works";
import Community from './Community';
import Skill from './Skill'
import Contact from './Contact'
import Links from './Link'

const Contents = () => (
  <BrowserRouter>
    <React.Fragment>
      <div id="navi">
        <div id="navi-box">
          <Link to="/">Profile</Link>
          <Link to="/works">Works</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/links">Links</Link>
        </div>
      </div>
      <div id="contents">
        <Route exact path='/' component={Profile} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/skill' component={Skill} />
        <Route exact path='/community' component={Community} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/links' component={Links} />
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default Contents;
