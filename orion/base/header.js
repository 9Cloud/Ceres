// React
import React, {PropTypes} from "react";
import {Component} from "tide/components";
import Link from 'react-router/lib/Link'

export class Header extends Component {

    render() {
        return (
          <header className="header l-clearfix">
              <div className="pg-container">
                  <h1 className="logo">Logo</h1>
                  <nav className="nav-container">
                      <div className="icon-menu" id="nav-icon-menu"></div>
                      <ul className="nav-list">
                          <li className="nav-item"><Link to="/">Home</Link></li>
                          <li className="nav-item"><Link to="forms">Forms</Link></li>
                          <li className="nav-item"><Link to="interactions">Interactions</Link></li>
                          <li className="nav-item"><Link to="helpers">Helpers</Link></li>
                          <li className="nav-item"><Link to="base">Base Components</Link></li>
                          <li className="nav-item"><Link to="rich">Rich Components</Link></li>
                          <li className="nav-item"><Link to="nav">Nav</Link></li>
                          <li className="nav-item"><Link to="typography">Typography</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
        )
    }
}
