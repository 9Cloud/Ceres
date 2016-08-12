// React
import React, {PropTypes} from "react";
import {Component} from "tide/components";
import {Spacer} from 'orion/ui/helpers';
import {Header, NavItem, NavList} from 'orion/ui/header';
import IndexLink from 'react-router/lib/IndexLink';

export class Navigation extends Component {
    render() {
        return (
            <Header>
                <NavList>
                    <NavItem><IndexLink to="/" activeClass="active" onlyActiveOnIndex={true}>Home</IndexLink></NavItem>
                    <NavItem to="colors">Colors</NavItem>
                    <NavItem to="forms">Forms</NavItem>
                    <NavItem to="interactions">Interactions</NavItem>
                    <NavItem to="helpers">Helpers</NavItem>
                    <NavItem to="components">UI Components</NavItem>
                    <NavItem to="nav">Nav</NavItem>
                    <NavItem to="typography">Typography</NavItem>
                </NavList>
            </Header>
        )
    }
}

export class StyleGuidePage extends Component {
    render() {
        return (
          <div>
              <Navigation />

              <div className="pg-container l-clearfix">
                  <div className="l-col-2 l-sidebar sticky">
                      {this.sidebar()}
                  </div>

                  <div className="l-col-10 l-col-gut-lg">
                      <div className="l-clearfix l-row-gut-4"></div>
                      {this.main()}
                  </div>
              </div>

              <Spacer />
          </div>
        )
    }
}